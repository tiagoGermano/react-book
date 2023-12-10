import styles from './Avatar.module.css';

// method #1
// export function Avatar(props) {
//   const hasBorder = props.hasBorder != false;
//   return (
//     <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
//     src={props.src}/>
//   )
// }


// method #2 - usando desestruturacao
export function Avatar({hasBorder = true, src}) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    src={src}/>
  )
}