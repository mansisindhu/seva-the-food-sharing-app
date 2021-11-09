import React from 'react';
// import {Route, Switch } from 'react-router-dom';




import style from '../components/container.module.css'

function container() {
    return (
        <div className={style.box}>
            <div className={style.container}>
                <h1 className={style.titl}>Sign in</h1>
                <div>
                    <input type="text" placeholder="Enter your email address" className={style.pass} />
                </div>

                <div>
                    <input type="password" placeholder="password" className={style.pass} />
                </div>
                <div>

                    <button className={style.btn}>Sign in</button>
                </div>

                <div className={style.line1}></div>
                <div className={style.or}>or</div>
                <div className={style.line2}></div>

                <div className={style.sign}>Sign in with</div>

                <div className={style.facebook}>
                <img src="https://media6.ppl-media.com/mediafiles/ecomm/misc/1542974745_google-logo.png" />
             <div id="google">Login with Google</div>
            </div>


                <div  className={style.facebook}>
                <img src="https://media6.ppl-media.com/mediafiles/ecomm/misc/1542974744_fb-logo.png" />
             <div id="facebook">Login with Facebook</div>
            </div>

                <div className={style.last}>Don't have an account?Sign up!</div>


          

            </div>

        </div>
    )
}

export default container;