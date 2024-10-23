
const Header = ({ title, image }) => {
    return (
      <div style={styles.container}>
        <img src={image} alt="header logo" style={styles.image} />
        <h1 style={styles.title}>{title}</h1>
      </div>
    );
  };

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      border: '2px solid #000',
      padding: '10px',
      borderRadius: '5px',
    },
    image: {
      width: '50px',
      height: '50px',
      marginRight: '15px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
  };

  export default Header;