import styles from "./BoostsRewards.module.css";
import Link from "next/link";
import ActionButton from "@/src/components/common/ActionButton/ActionButton";
import Info from "@/src/components/common/Info/Info";
import {RewardsIcon} from "@/src/components/icons/Rewards/RewardsIcon";

const rewardsTooltip =
  "These are the total Fuel tokens earned that will be distributed at the end of the epoch. The exact dollar amount will change based on Fuel’s current price. ";

const epochTooltip =
  "Current epoch lasts for 45 days total. All rewards wll be distributed at the end of the epoch. ";

const BoostsRewards = () => {
  return (
    <div className={styles.boosts}>
      <div className={styles.boostsHeader}>
        <p className={styles.boostsTitle}>Boost rewards</p>
        <Link href={`/swap`}>
          <ActionButton
            className={styles.learnMoreButton}
            variant="secondary"
            fullWidth
          >
            Learn more
          </ActionButton>
        </Link>
      </div>

      {/* Boosts rewards details */}
      <div className={styles.boostsFallback}>
        <div className={styles.rewardsSection}>
          <div className={styles.rewardsItem}>
            <div className={styles.rewardsLabel}>
              <p>Rewards earned</p>
              <Info
                tooltipText={rewardsTooltip}
                tooltipKey="rewards"
                color="#D1D4F9"
              />
            </div>

            <div className={styles.rewardsValue}>
              <RewardsIcon />
              <p>23,000 FUEL</p>
              <span>~ $2,000 </span>
            </div>
          </div>
          <div className={styles.rewardsItem}>
            <div className={styles.rewardsLabel}>
              <p>Epoch duration</p>
              <Info
                tooltipText={epochTooltip}
                tooltipKey="epoch"
                color="#D1D4F9"
              />
            </div>
            <p className={styles.rewardsValue}>10 days, 4 hours, 5 min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoostsRewards;
