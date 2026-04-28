# Security Policy

## Scope

SiteGuard is a client-side JavaScript deterrent for low-risk websites, landing pages, and demos.

It blocks or interferes with casual browser actions such as right-click, dragging, text selection, printing, selected keyboard shortcuts, and basic developer tools detection.

SiteGuard is not access control, bot protection, DRM, a WAF, authentication, authorization, anti-scraping protection, or a real security boundary.

Do not use this project to protect private data, paid content, authenticated applications, high-value intellectual property, secrets, credentials, or anything that must remain confidential.

## Supported Versions

Only the latest release and the current `main` branch are supported for security review.

| Version | Supported |
| ------- | --------- |
| Latest release | Yes |
| `main` branch | Yes |
| Older releases | No |

## Reporting a Vulnerability

Please do not publish security-sensitive details in a public issue.

Use GitHub's private vulnerability reporting if it is available for this repository. If private reporting is not available, open a minimal public issue asking for a private contact method, without including exploit details, payloads, or affected targets.

Include:

- A clear description of the issue
- Steps to reproduce
- Browser and operating system used
- The affected version, commit, or file
- Whether the issue affects the library, the demo, or the documentation
- A minimal proof of concept when appropriate

## Valid Security Reports

Reports are useful if they show a real security problem in this repository, for example:

- A cross-site scripting issue introduced by the demo or documentation
- A malicious or unsafe code path added to `siteguard.js`
- Unexpected network requests, data collection, credential exposure, or data exfiltration
- A supply-chain issue affecting files distributed by this repository
- A repository configuration issue that could allow unauthorized changes to releases or source code
- Documentation that encourages users to treat SiteGuard as real protection for sensitive content

## Out of Scope

The following are not vulnerabilities in this project:

- Bypassing SiteGuard by disabling JavaScript
- Bypassing SiteGuard with browser developer tools
- Bypassing SiteGuard using extensions, proxies, curl, wget, browser automation, or custom clients
- Viewing page source, downloaded assets, or network requests
- Copying public content from a page that includes SiteGuard
- Removing or modifying SiteGuard from a local copy of a website
- False positives caused by aggressive developer tools detection on slow devices
- Accessibility, SEO, or usability complaints unless they create a concrete security issue

These limitations are expected because SiteGuard runs entirely in the user's browser. Anything delivered to the browser can be inspected, modified, copied, or bypassed by the user.

## Safe Testing Rules

Only test against your own site, a local copy, or the official demo environment.

Do not test against third-party websites without permission. Do not attempt denial-of-service testing, credential theft, phishing, scraping, or attacks against users.

## Maintainer Response

Security reports are reviewed on a best-effort basis.

If the report is valid, the fix may include a code change, documentation update, release replacement, or clarification of the project's security limitations.

If the report only demonstrates that client-side deterrents can be bypassed, it will be closed as out of scope.
