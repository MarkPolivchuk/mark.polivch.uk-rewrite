import React from 'react'

const Section = ({ title, titleColor, borderColor, children }) => (
  <div class={`border-t-4 ${borderColor} mb-16 pt-4 px-4 flex-grow`}>
    <h3 class={`${titleColor} tracking-wider font-semibold uppercase mb-8`}>
      {title}
    </h3>
    {children}
  </div>
)

export default Section
