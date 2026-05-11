import React from 'react';
import ShortServices from './ShortServices';

const Layout = ({ children }) => {
  return (
    <div className="bg-[#ECE5DD] min-h-screen w-full">

      {/* soft premium background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-180px] left-[-120px] w-[320px] h-[320px] bg-[#0D6E4F]/5 blur-3xl rounded-full" />
        <div className="absolute bottom-[-180px] right-[-120px] w-[320px] h-[320px] bg-[#0D2040]/5 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-[1650px] mx-auto px-2 sm:px-3 lg:px-3">

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:flex gap-2 py-3">

          {/* CENTER CONTENT */}
          <main className="w-[80%] min-w-0 order-1">
            <div
              className="
                bg-[#ECE5DD]
                border border-[#E5E7EB]
                shadow-sm
                rounded-2xl
                overflow-hidden
              "
            >
              {children}
            </div>
          </main>

          {/* RIGHT - SERVICES */}
          <aside className="w-[20%] order-2">
            <div className="sticky top-16 space-y-3">
              <ShortServices />
            </div>
          </aside>

        </div>

        {/* ================= TABLET ================= */}
        <div className="hidden md:block lg:hidden">

          <div
            className="
              bg-[#ECE5DD]
              rounded-2xl
              shadow-sm
              border border-[#E5E7EB]
              overflow-hidden
            "
          >
            {children}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <ShortServices />
          </div>

        </div>

        {/* ================= MOBILE ================= */}
        <div className="block md:hidden">

          <div
            className="
              bg-[#ECE5DD]
              rounded-2xl
              shadow-sm
              border border-[#E5E7EB]
              overflow-hidden
            "
          >
            {children}
          </div>

          <div className="mt-4">
            <ShortServices />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Layout;