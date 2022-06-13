
import React from 'react'
import Github from '/Users/yannjo/blog/src/images/github.png'
import LinkedIn from '/Users/yannjo/blog/src/images/linkedIn.jpeg'


function Contact() {

    const github = () => {
        window.open('https://github.com/YannJoseph')
    };

    const linkedIn = () => {
        window.open('https://www.linkedin.com/in/yann-joseph-a66332232/')
    }



  return (
    <div className='logo'>

        <h1 className='liensTitle'>Pour me retrouver : </h1>

        <ul className='liens'>

            <li>
                <div className='lienButton '>

                    <button className='cardButton' onClick={github}>

                        <img src={Github} alt='' className='icon' />

                            Mon github

                    </button>

                </div>
                
            </li>

            <li>
                
                <div className='lienButton'>

                    <button className='cardButton' onClick={linkedIn}>

                        <img src={LinkedIn} alt=''className='icon' />

                             Mon linkedIn

                    </button>

                </div>
                
            </li>

        </ul>

    </div>
  )
}

export default Contact

