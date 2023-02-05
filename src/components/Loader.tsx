import PacmanLoader from 'react-spinners/PacmanLoader';

const Loader = () => {
    return (
        <div className="container container-start">
            <PacmanLoader size={50} color="#fff" />
        </div>
    );
};

export default Loader;
