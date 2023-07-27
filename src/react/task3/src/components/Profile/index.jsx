import styles from "./Profile.module.scss"

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
          <button className={styles.profileBtnsBtn}>{githubUrl}</button>
          <button className={styles.profileBtnsBtn}>{linkedinUrl}</button>
          <button className={styles.profileBtnsBtn}>{twitterUrl}</button>
        </div>
      </div>
    </>
  )
}