import React from 'react'

const AdvancedReading = () => {
  return (
    <div className="">
      <h1 className="pb-[54px] font-mulish font-normal text-[24px] leading-[30px]">
        Visit the following resources to learn more:
      </h1>

      <ul className="list-disc pb-[146px] pl-[38px] text-[20px]">
        <li className="cursor-pointer">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://roadmap.sh/guides/basic-authentication"
            target="_blank"
          >
            Basic Authentication
          </a>
        </li>

        <li className="cursor-pointer ">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://roadmap.sh/guides/session-authentication"
            target="_blank"
          >
            Session Based Authentication
          </a>
        </li>

        <li className="cursor-pointer ">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://roadmap.sh/guides/token-authentication"
            target="_blank"
          >
            Token Based Authentication
          </a>
        </li>

        <li className="cursor-pointer ">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://roadmap.sh/guides/jwt-authentication"
            target="_blank"
          >
            JWT Authentication
          </a>
        </li>

        <li className="cursor-pointer ">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://roadmap.sh/guides/oauth"
            target="_blank"
          >
            OAuth
          </a>
        </li>

        <li className="cursor-pointer ">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://roadmap.sh/guides/sso"
            target="_blank"
          >
            SSO - Single Sign On
          </a>
        </li>
      </ul>
    </div>
  )
}

export default AdvancedReading
