'use client'

const PhotographyPage = () => {
  return (
  <div className="min-h-screen pt-36 px-6">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Photo{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
        </div>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Fun pics.
        </p>
      </div>

      {/* 
      Everything else is temporarily commented out for testing/debugging purposes.
      */}
    </div>
  </div>
)
}

export default PhotographyPage