import React from 'react'

const Footer = () => {
    return (
        <>
            <footer class="relative" style={{backgroundImage:"url('/images/footer-bg.png')", backgroundPosition:"top center", backgroundSize:"cover"}}>
  <div class="max-w-[1200px] mx-auto pb-4 pt-12 sm:pt-16 md:pt-18">
    <div class="flex flex-col md:flex-row md:space-x-4">
      <div class="md:w-[25%] p-4 flex justify-center md:justify-start">
        <img src="/images/logo.svg" alt="MEEM Logo" class="h-24 sm:h-32 md:h-48 mb-4" />
      </div>

      <div class="md:w-[45%] p-4">
        <h3 class="text-base sm:text-lg md:text-[18px] text-[#291570] font-bold mb-2">About MEEM</h3>
        <p class="text-sm sm:text-base md:text-[16px] text-[#291570]">
          Meem is a creative design studio dedicated to delivering unique, impactful design solutions. We specialize in branding, logos, and visual content that capture your brand’s essence and connect with your audience. At Meem, creativity and precision come together to bring your vision to life.
        </p>
      </div>
   
      <div class="md:w-[30%] p-4">
        <h3 class="text-base sm:text-lg md:text-[18px] text-[#291570] font-medium mb-2">Contact Us</h3>
        <p class="text-sm sm:text-base md:text-[16px] text-[#291570]">Email: <span className="font-semibold">hhhh@meemdesigns.com</span></p>
        <p class="text-sm sm:text-base md:text-[16px] text-[#291570] mb-4">Phone: <span className="font-semibold">+977878</span></p>
        <h3 class="text-base sm:text-lg md:text-[18px] text-[#291570] font-medium mb-4">Social</h3>
        <div class="flex space-x-4">
          <a href="#" aria-label="Facebook"><svg class="h-4 w-4 sm:h-5 sm:w-5 text-[#291570] hover:text-[#291570]" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg></a>
          <a href="#" aria-label="Twitter"><svg class="h-4 w-4 sm:h-5 sm:w-5 text-[#291570] hover:text-[#291570]" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a>
          <a href="#" aria-label="Instagram"><svg class="h-4 w-4 sm:h-5 sm:w-5 text-[#291570] hover:text-[#291570]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.982-6.98.059-1.281.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.948-.196-4.354-2.617-6.782-6.982-6.982-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
        </div>
      </div>
    </div>
    <div class="w-full border-t border-gray-200 mt-6 pt-4 text-center">
      <p class="text-xs sm:text-sm md:text-[14px] text-[#291570]">© {new Date().getFullYear()} MEEM FOR DESIGNS | All Rights Reserved</p>
    </div>
  </div>
</footer>
        </>
    )
}

export default Footer