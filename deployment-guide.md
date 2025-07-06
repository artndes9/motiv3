# 🚀 Deployment Guide - Moti Infraheights Website

## Cache Behavior & Update Times

### Standard Deployment (15 minutes max)
```bash
# 1. Build the project
yarn build

# 2. Upload dist/ folder to server
# 3. Changes will be visible within 15 minutes
```

### Emergency Deployment (Immediate)
```bash
# 1. Build the project
yarn build

# 2. Upload dist/ folder to server

# 3. Force cache clear (if needed immediately)
# Add ?v=YYYYMMDD to any URL
# Example: https://motiinfraheights.com/?v=20250102
```

## File Update Timings

| File Type | Cache Duration | When Changes Appear |
|-----------|---------------|-------------------|
| **Website Content** | 15 minutes | Within 15 minutes |
| **Images/Videos** | Auto-versioned | Immediately after build |
| **CSS/JavaScript** | Auto-versioned | Immediately after build |
| **Brochures/PDFs** | 1 week | Within 1 week |
| **Floor Plans** | 1 week | Within 1 week |

## Emergency Cache Clear

If you need immediate updates:

1. **Global Cache Clear**: Add `?v=YYYYMMDD` to main URL
2. **Specific File**: Add `?v=YYYYMMDD` to any file URL
3. **CDN Clear**: If using CDN, clear cache from CDN panel

## Best Practices

- **Content Updates**: Plan for 15-minute delay
- **Design Changes**: Build automatically handles versioning
- **Emergency Updates**: Use cache-busting parameters
- **Marketing Materials**: Update brochures/PDFs during low-traffic hours

## Monitoring

- Check website after deployment
- Test on different devices/browsers
- Monitor Google Analytics for traffic patterns
- Use browser dev tools to verify cache behavior

---
*This guide ensures optimal performance while maintaining update flexibility* 