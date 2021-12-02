import classes from './Template.module.css'


function Template(props){
    return(
        <div className={classes.main}>
            <div className={classes.demo}>
                This is a template.
            </div>
        </div>
    )
}

export default Template;