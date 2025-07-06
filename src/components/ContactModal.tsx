import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { GTMEvents, trackFormInteraction } from "@/lib/gtm";

interface ContactModalProps {
  trigger: React.ReactNode;
  defaultMessage?: string;
  actionType?: 'site_visit' | 'brochure_download';
  brochureUrl?: string;
}

type FormInput = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  purpose?: string;
  message: string;
  uid?: string;
  city?: string;
  state?: string;
}

const ContactModal = ({ 
  trigger, 
  defaultMessage = "", 
  actionType = 'site_visit',
  brochureUrl = '/brochure/pearl-central-park-brochure.pdf'
}: ContactModalProps) => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormInput>({
    defaultValues: {
      message: defaultMessage
    }
  });
  const [isOpen, setIsOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  // Function to trigger PDF download
  const downloadPDF = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  async function onSubmit(data: FormInput) {
    try {
      // Prepare data similar to your previous implementation
      const submissionData = {
        ...data,
        name: data.name + " " + data.lastName,
        uid: 'moti_infraheights',
        state: '',
        city: '',
        purpose: 'General Contact'
      };
      
      // Remove lastName from final submission
      const { lastName, ...finalData } = submissionData;

      const url = 'https://theroguepixxel.com/waapi/contact_submission';
      const requestOptions: RequestInit = {
        method: 'POST',
        mode: "no-cors",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        body: Object.entries(finalData).map(([k, v]) => {
          return k + '=' + encodeURIComponent(v || '');
        }).join('&'),
      };

      await fetch(url, requestOptions);
      
      // Send appropriate GTM event based on action type
      if (actionType === 'brochure_download') {
        GTMEvents.submitContactForm();
        GTMEvents.downloadBrochure();
      } else {
        GTMEvents.submitContactForm();
      }
      
      setSubmitStatus('success');
      
      // Handle brochure download after successful form submission
      if (actionType === 'brochure_download') {
        // Slight delay to ensure form submission completes
        setTimeout(() => {
          downloadPDF(brochureUrl, 'Pearl-Central-Park-Brochure.pdf');
        }, 1000);
        
        toast({
          title: "Thank You!",
          description: "Your brochure is downloading now. Our team will also contact you within 24 hours.",
        });
      } else {
        toast({
          title: "Thank You!",
          description: "Our team will contact you within 24 hours to schedule your site visit.",
        });
      }
      
      // Reset form after successful submission
      reset();
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    }
  };

  const handleModalChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset status when modal closes
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 300);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleModalChange}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-slate-800">
            {actionType === 'brochure_download' 
              ? 'Download Brochure - Get Exclusive Details' 
              : 'Book Site Visit - Get Exclusive Details & Special Offers'
            }
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6 bg-slate-800 text-white p-6 rounded-lg">
            <div>
              <h3 className="text-xl font-bold text-orange-400 mb-4">Why Choose Pearl The Central Park?</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ A Premium Location</li>
                <li>✓ RERA approved project</li>
                <li>✓ 30+ world-class amenities</li>
                <li>✓ Ready to move in by 2028</li>
                <li>✓ Project approved by all major banks</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-orange-400">Contact Information</h4>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-sm">9430737562 / 9264296043 / 9264296044</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-sm">motiinfraheights23@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-400 mt-1" />
                <span className="text-sm">Argora Pundag Road, Near Moti Fuel Centre, Argora, Ranchi, Jharkhand</span>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="space-y-4">
                         {submitStatus === 'success' ? (
               <div className='text-center py-8'>
                 <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                 <h2 className='text-2xl font-semibold text-slate-800 mb-2'>
                   {actionType === 'brochure_download' ? 'Brochure Downloaded!' : 'Thank You!'}
                 </h2>
                 <p className='text-gray-600'>
                   {actionType === 'brochure_download' 
                     ? 'Your brochure has been sent to your downloads. Our team will also contact you within 24 hours with exclusive offers.'
                     : 'Your message has been sent successfully. A representative will contact you shortly to schedule your site visit.'
                   }
                 </p>
                 <Button 
                   onClick={() => setSubmitStatus('idle')}
                   className="mt-4 bg-orange-500 hover:bg-orange-600"
                 >
                   {actionType === 'brochure_download' ? 'Download Another Brochure' : 'Submit Another Request'}
                 </Button>
               </div>
            ) : submitStatus === 'error' ? (
              <div className='text-center py-8'>
                <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h2 className='text-2xl font-semibold text-slate-800 mb-2'>Oops! Something went wrong</h2>
                <p className='text-gray-600 mb-4'>Please try again or contact us directly at: 9264296043</p>
                <Button 
                  onClick={() => setSubmitStatus('idle')}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  Try Again
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      First Name<sup className="text-red-500">*</sup>
                    </label>
                    <input 
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      type="text"
                      {...register("name", { 
                        required: "First name is required",
                        maxLength: { value: 30, message: "First name must be less than 30 characters" }
                      })}
                      placeholder="Enter your first name" 
                    />
                    {errors.name && (
                      <p className='text-sm text-red-500'>{errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Last Name<sup className="text-red-500">*</sup>
                    </label>
                    <input 
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      type="text"
                      {...register("lastName", { 
                        required: "Last name is required",
                        maxLength: { value: 30, message: "Last name must be less than 30 characters" }
                      })}
                      placeholder="Enter your last name" 
                    />
                    {errors.lastName && (
                      <p className='text-sm text-red-500'>{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Phone Number<sup className="text-red-500">*</sup>
                  </label>
                  <input 
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    type="tel"
                    {...register('phone', { 
                      required: "Phone number is required",
                      pattern: {
                        value: /^\d{10}$/,
                        message: 'Please enter a valid 10-digit phone number'
                      }
                    })}
                    placeholder="Enter your phone number" 
                  />
                  {errors.phone && (
                    <p className='text-sm text-red-500'>{errors.phone.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Email<sup className="text-red-500">*</sup>
                  </label>
                  <input 
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address"
                      }
                    })}
                    placeholder="Enter your email" 
                  />
                  {errors.email && (
                    <p className='text-sm text-red-500'>{errors.email.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Message<sup className="text-red-500">*</sup>
                  </label>
                  <textarea 
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors min-h-[100px] ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('message', { 
                      required: "Message is required",
                      minLength: { value: 10, message: "Message must be at least 10 characters" }
                    })}
                    placeholder="Any specific requirements?" 
                  />
                  {errors.message && (
                    <p className='text-sm text-red-500'>{errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full ${
                    isSubmitting 
                      ? 'bg-orange-400 cursor-not-allowed' 
                      : 'bg-orange-500 hover:bg-orange-600'
                  } text-white`}
                >
                                     {isSubmitting ? (
                     <div className='flex items-center justify-center'>
                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                       </svg>
                       {actionType === 'brochure_download' ? 'Preparing Download...' : 'Submitting...'}
                     </div>
                   ) : (actionType === 'brochure_download' ? 'Download Brochure Now' : 'Get Instant Call Back')}
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to receive calls/messages from our team
                </p>
              </form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
