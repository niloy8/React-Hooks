import useWindowwidth from "./useWindowwidth";



const Layout = () => {
    const smallScreen = useWindowwidth(600);
    return (
        <div>
            <h1>You are browsing on {smallScreen ? "small" : "big"} device</h1>
        </div>
    );
};

export default Layout;