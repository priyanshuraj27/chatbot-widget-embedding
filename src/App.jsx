import { useState } from 'react'
import './App.css'

function App() {
  const [width, setWidth] = useState('400')
  const [height, setHeight] = useState('600')
  const [iframeWidth, setIframeWidth] = useState(400)
  const [iframeHeight, setIframeHeight] = useState(600)

  const applyDimensions = () => {
    const w = parseInt(width) || 400
    const h = parseInt(height) || 600
    setIframeWidth(w)
    setIframeHeight(h)
  }

  const applyPreset = (w, h) => {
    setWidth(w.toString())
    setHeight(h.toString())
    setIframeWidth(w)
    setIframeHeight(h)
  }

  const copyCode = () => {
    const code = `<iframe 
  src="https://chatbot-widget-embedding.vercel.app/support-widget.html"
  width="${iframeWidth}"
  height="${iframeHeight}"
  frameborder="0"
></iframe>`
    navigator.clipboard.writeText(code)
    alert('Embed code copied to clipboard!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl font-bold mb-3">Support Widget Demo</h1>
          <p className="text-xl opacity-90">Customize dimensions and see the widget in action!</p>
        </div>

        <div className="grid lg:grid-cols-[400px_1fr] gap-8">
          {/* Control Panel */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Widget Settings
            </h2>

            {/* Quick Presets */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Quick Presets</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => applyPreset(400, 600)}
                  className="p-3 border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all font-semibold text-sm"
                >
                  Desktop<br/><span className="text-xs text-gray-500">400 × 600</span>
                </button>
                <button
                  onClick={() => applyPreset(350, 550)}
                  className="p-3 border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all font-semibold text-sm"
                >
                  Compact<br/><span className="text-xs text-gray-500">350 × 550</span>
                </button>
                <button
                  onClick={() => applyPreset(450, 700)}
                  className="p-3 border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all font-semibold text-sm"
                >
                  Large<br/><span className="text-xs text-gray-500">450 × 700</span>
                </button>
                <button
                  onClick={() => applyPreset(320, 500)}
                  className="p-3 border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all font-semibold text-sm"
                >
                  Mobile<br/><span className="text-xs text-gray-500">320 × 500</span>
                </button>
              </div>
            </div>

            {/* Width Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Width (px)
              </label>
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && applyDimensions()}
                min="320"
                max="800"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-100 transition-all"
              />
            </div>

            {/* Height Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Height (px)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && applyDimensions()}
                min="400"
                max="900"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-100 transition-all"
              />
            </div>

            {/* Apply Button */}
            <button
              onClick={applyDimensions}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Apply & Preview
            </button>

            {/* Embed Code */}
            <div className="mt-8 pt-8 border-t-2 border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-700">Embed Code</h3>
                <button
                  onClick={copyCode}
                  className="px-4 py-2 bg-gray-800 text-white text-xs rounded-lg hover:bg-gray-700 transition-all"
                >
                  Copy
                </button>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl text-xs overflow-x-auto">
{`<iframe 
  src="https://chatbot-widget-embedding.vercel.app/support-widget.html"
  width="${iframeWidth}"
  height="${iframeHeight}"
  frameborder="0"
></iframe>`}
              </pre>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Live Preview
              </h2>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-semibold">
                {iframeWidth} × {iframeHeight}
              </span>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl mb-6 border-l-4 border-purple-500">
              <p className="text-sm text-gray-700">
                <strong>Widget URL:</strong>{' '}
                <a 
                  href="https://chatbot-widget-embedding.vercel.app/support-widget.html" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline"
                >
                  chatbot-widget-embedding.vercel.app/support-widget.html
                </a>
              </p>
            </div>

            {/* Widget Preview */}
            <div className="flex justify-center items-center min-h-[500px] bg-gray-100 rounded-xl p-6">
              <div className="shadow-2xl rounded-2xl overflow-hidden transition-all duration-300">
                <iframe
                  src="https://chatbot-widget-embedding.vercel.app/support-widget.html"
                  width={iframeWidth}
                  height={iframeHeight}
                  frameBorder="0"
                  style={{ display: 'block', border: 'none' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
