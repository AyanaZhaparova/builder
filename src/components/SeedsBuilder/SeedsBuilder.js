import classes from "*.module.css"

const SeedsBuilder = () => {
    return (
        <div className={classes.SeedsBuilder}>
            <SeedsPreview />
            <SeedsControls />

        </div>
    )
};

export default SeedsBuilder;