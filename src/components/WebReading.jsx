import React from 'react'

const WebReading = () => {
  return (
    <div className="">
      <h1 className="pb-[54px] font-mulish font-normal text-[24px] leading-[30px]">
        Visit the following resources to learn more:
      </h1>

      <ul className="list-disc pb-[146px] pl-[38px] text-[20px]">
        <li className="cursor-pointer">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://web.dev/why-https-matters/"
            target="_blank"
          >
            Why HTTPS Matters
          </a>
        </li>

        <li className="cursor-pointer ">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://en.wikipedia.org/wiki/OWASP"
            target="_blank"
          >
            Wikipedia - OWASP
          </a>
        </li>

        <li className="cursor-pointer ">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://github.com/0xRadi/OWASP-Web-Checklist"
            target="_blank"
          >
            OWASP Web Application Security Testing Checklist
          </a>
        </li>

        <li className="cursor-pointer ">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://sucuri.net/guides/owasp-top-10-security-vulnerabilities-2020/"
            target="_blank"
          >
            OWASP Top 10 Security Risks
          </a>
        </li>

        <li className="cursor-pointer ">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://cheatsheetseries.owasp.org/cheatsheets/AJAX_Security_Cheat_Sheet.html"
            target="_blank"
          >
            OWASP Cheatsheets
          </a>
        </li>

        <li className="cursor-pointer ">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"
            target="_blank"
          >
            Content Security Policy (CSP)
          </a>
        </li>

        <li className="cursor-pointer ">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://www.youtube.com/playlist?list=PLH8n_ayg-60J9i3nsLybper-DR3zJw6Z5"
            target="_blank"
          >
            OWASP ZAP Step-by-Step Tutorial
          </a>
        </li>
      </ul>
    </div>
  )
}

export default WebReading
