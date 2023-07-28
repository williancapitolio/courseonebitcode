import styles from "./styles.module.scss"

export const Profile = ({
  avatar,
  name,
  bio,
  phone,
  email,
  githubUrl,
  linkedinUrl,
  twitterUrl
}) => {
  return (
    <>
      <div className={styles.profile}>
        <img src={avatar} alt="Profile avatar" className={styles.profileAvatar} />
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileData}>{bio}</p>
        <p className={styles.profileData}>{phone}</p>
        <p className={styles.profileData}>{email}</p>
        <div className={styles.profileBtns}>
          <a href={githubUrl} target="_blank" rel="noreferrer" className={styles.profileBtnsBtn}>GitHub</a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer" className={styles.profileBtnsBtn}>LinkedIn</a>
          <a href={twitterUrl} target="_blank" rel="noreferrer" className={styles.profileBtnsBtn}>Twitter</a>
        </div>
      </div>
    </>
  )
}