// import React, { useState } from 'react'

export default function About(props) {

    // const [mystyle, setMystyle] = useState({
    //     color: 'Black',
    //     backgroundColor: 'White'
    // });

    let mystyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
        // border: '2px solid',
    };
    // const [buttonText, setButtonText] = useState("Enable Dark Mode")                               
    // const toggleStyle = () => {
    //     if(mystyle.color === 'Black'){
    //         setMystyle({    
    //             color: 'White',
    //             backgroundColor: 'Black',
    //             border: '1px solid White'
    //         })
    //         setButtonText("Enable Light Mode")
    //     }
    //     else{
    //         setMystyle({
    //             color: 'Black',
    //             backgroundColor: 'White'
    //         })
    //         setButtonText("Enable Dark Mode")
    //     }
    // }
  return (
    <div className='container'>
        <h1 className='my-3' style={{color: props.mode === 'dark' ? 'white':'#042743'}}>About Us.</h1>
      <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
                <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={mystyle}>
                <div className="accordion-body" style={mystyle}>
                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or removing extra spaces.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                <strong>Free to Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyle}>
                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
                <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyle}>
                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
