// takes the component as an arg, but not as a prop
const withFancyText = (WrappedComponent) => {

    return(props) => {
        const fancyStyle={
            fontStyle:"italic",
            fontWeight: "bold"
        };
        return(
            <div style={fancyStyle}>
                <WrappedComponent {...props} />
            </div>
        );
    };
};

export default withFancyText;