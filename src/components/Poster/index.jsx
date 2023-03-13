import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const Poster = ({ src, alt, color, name, data }) => {
  const [toggle, setToggle] = useState(false);

  const openModal = () => {
    setToggle(!toggle);
  };

  let sum = 0;

  return (
    <div className={styles.container}>
      <div className={styles.poster} onClick={openModal}>
        <img
          src={src}
          alt={alt}
          className={styles.icon}
          style={{ backgroundColor: color }}
        />
        <div className={styles.infoContainer}>
          <b>{name}</b>
          {data.map((item, index) => {
            if (item.amount) {
              sum += item.amount;
            }
          })}
          {sum ? (
            <p className={styles.result}>${sum}</p>
          ) : (
            <p className={styles.result}>{data.length}</p>
          )}
        </div>
      </div>
      {toggle && (
        <div className={styles.modalWindow}>
          {data.map((item, index) => (
            <div className={styles.modalItem} key={`${item.image}${index}`}>
              {item.image && (
                <div className={styles.image}>
                  <img src={item.image} alt={item.alt} />
                </div>
              )}
              <div className={styles.info}>
                {item.name ? <p>{item.name}</p> : <p>${item.amount}</p>}
                {item.description && <p>{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Poster.defaultProps = {
  alt: "icon",
  color: "lightgrey",
};

Poster.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      amount: PropTypes.number,
      image: PropTypes.string,
      alt: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default Poster;
