import { useEffect } from 'react'

export function useConsoleEasterEgg() {
  useEffect(() => {
    const keployAscii = `
\n
 _  __                 _                       _          
| |/ /   ___   _ __   | |   ___    _   _      (_)   ___   
| ' /   / _ \ | '_ \  | |  / _ \  | | | |     | |  / _ \  
| . \  |  __/ | |_) | | | | (_) | | |_| |  _  | | | (_) | 
|_|\_\  \___| | .__/  |_|  \___/   \__, | (_) |_|  \___/  
              |_|                  |___/                  
              
** You have unlocked the easter egg! **
** Run Keploy command in you Terminal **
** Star us on GitHub: https://github.com/keploy/keploy **
    `

    const styles = [
      'font-size: 12px',
      'font-family: monospace',
      'line-height: 1.2',
      'white-space: pre',
      'padding: 20px',
      'dispaly: block',
    ].join(';')

    console.log('%c' + keployAscii, styles)

    // Add some fun console messages
    console.log(
      '%c🚀 Interested in joining our team? https://keploy.io/careers',
      'color: #FF5733; font-size: 14px; font-weight: bold;',
    )
  }, [])
}
