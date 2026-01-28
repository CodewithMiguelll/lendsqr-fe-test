import styles from './card.module.scss';

interface CardProps {
  icon: React.ReactNode;
  backgroundColor?: string;
  title: string;
  description?: string;
}

const Card = ({ icon, backgroundColor, title, description }: CardProps) => {
    return (
      <div className={styles.card}>
        <div className={styles.cardIcon} style={{ backgroundColor }}>
          {icon}
        </div>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardDescription}>{description}</div>
      </div>
    );
}
 
export default Card;