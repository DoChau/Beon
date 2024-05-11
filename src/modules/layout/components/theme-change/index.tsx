'use client'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

const Themechoose = () => {
    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
      }, [])
    return (
        <>
        <div className='inline-flex'>
            <strong>COLOR CHANGE:  </strong>
            <select 
                title="daisyUi-theme-choose"
                data-choose-theme>
                <option value="cupcake">Cupcake</option>
                <option value="dark">Dark</option>
                <option value="aqua">Aqua</option>
            </select>
            {/*<button 
                title="daisyUi-theme-choose" 
                data-set-theme="cupcake" 
                data-act-class="ACTIVECLASS"
                className='bg-green-700 focus:outline-none m-1 rounded p-2'
                >Default
                </button>
            <button 
                title="daisyUi-theme-choose" 
                data-set-theme="dark" 
                data-act-class="ACTIVECLASS"
                className='bg-green-700 focus:outline-none m-1 rounded p-2'
                >Dark
                </button>
            <button 
                title="daisyUi-theme-choose" 
                data-set-theme="aqua" 
                data-act-class="ACTIVECLASS"
                className='bg-green-700 focus:outline-none m-1 rounded p-2'
                >Aqua
                </button>*/}
        </div>
        {/*<div className="dropdown mb-72">
            <div tabindex="0" role="button" className="btn m-1">
                Theme
                <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
            </div>
            <ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default"/></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk"/></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua"/></li>
            </ul>
        </div>*/}
        </>
        
    )
}
export default Themechoose