      {/* 2. Mẫu: Modern Glassmorphism (Hiện đại & Bay bổng) */}
      <section>
        <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest">2. Glassmorphism - Hiện đại & Trong suốt</h3>
        <div className="relative h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center px-8 overflow-hidden">
            {/* Background decorative elements to show glass effect */}
            <div className="absolute top-0 left-1/4 w-20 h-20 bg-yellow-300 rounded-full blur-2xl opacity-50"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-pink-400 rounded-full blur-3xl opacity-50"></div>
            
          <nav className="relative w-full bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-8 py-3 flex items-center justify-between shadow-lg">
            <div className="flex-1 flex items-center space-x-6">
              <a href="#" className="text-white font-semibold hover:opacity-80 transition-opacity">Khám phá</a>
              <a href="#" className="text-white font-semibold hover:opacity-80 transition-opacity">Giải pháp</a>
            </div>
            
            <div className="flex-shrink-0 px-4">
              <div className="bg-white p-1 rounded-full shadow-inner">
                <img 
                  src="https://cdn.sanity.io/images/g8ghtlxt/production/78ebf66bbbfe3cb0be3e02120a257b850c6dfc8a-1024x767.png?w=2000&fit=max&auto=format" 
                  alt="Logo" 
                  className="h-8 w-auto rounded-full"
                />
              </div>
            </div>
            
            <div className="flex-1 flex items-center justify-end space-x-6">
              <a href="#" className="text-white font-semibold hover:opacity-80 transition-opacity">Liên hệ</a>
              <div className="flex items-center space-x-2 text-white">
                <Globe size={16} />
                <span className="text-sm cursor-pointer hover:underline">VN</span>
              </div>
            </div>
          </nav>
        </div>
      </section>