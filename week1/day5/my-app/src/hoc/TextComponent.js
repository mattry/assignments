import withFancyText from "./withFancyText";

const TextComponent = () => {

    return(
        <p>Hello Fancy Text!</p>
    );

}

// if we want to compose this component, we export with the function call
export default withFancyText(TextComponent);