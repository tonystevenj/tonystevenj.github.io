import classes from './TheHome.module.css'


function TheHome(props) {
    return (
        <div className={classes.main}>
            <div className={classes.upper}>

            </div>
            <div className={classes.lower}>

            </div>

            <div className={classes.body}>
                <div className={classes['body-upper']}>
                    <h1>
                        Welcome to
                        <br />
                        Steven's Github!
                    </h1>
                </div>
                <div className={classes['body-lower']}>
                    <p>
                        View catalogue of my public projects,
                        <br />
                        please go to my <a href="https://github.com/tonystevenj">Github Bio</a>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default TheHome;