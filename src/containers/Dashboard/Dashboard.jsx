import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Divider,
} from "@mui/material";
import LatestVideoCard from "../../components/LatestVideoCard";
import ColorText from "../../components/ColorText";

function Dashboard() {
  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h5">
        Channel Dashboard
      </Typography>
      <Box sx={styles.columnsContainer}>
        <LatestVideoCard sx={styles.item} />
        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">Latest post</Typography>
            <Box sx={styles.postAuthorSection}>
              <Avatar
                src="/src/assets/avatars/user.png"
                alt="Author"
                sx={styles.avatar}
              />
              <Typography sx={styles.postMeta}>React With Me</Typography>
              <Typography sx={styles.postMeta}>Jan 14, 2024</Typography>
            </Box>
            <Typography variant="body2">
              Why did the React developer go broke? Because they kept using
              useEffect without cleaning up their finances!😆
            </Typography>
            <Divider sx={styles.divider} />
            <Box sx={styles.postStats}>
              <Typography variant="body2">Likes</Typography>
              <Typography variant="body2">Comments</Typography>
              <Typography variant="h6">12</Typography>
              <Typography variant="h6">5</Typography>
            </Box>
            <Typography sx={styles.cardAction} variant="link">
              GO TO COMMUNITY TAB
            </Typography>
          </CardContent>
        </Card>

        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">Channel analytics</Typography>
            <Typography variant="h7">Current Subscribers</Typography>
            <Typography variant="h4">4,414</Typography>
            <Typography variant="h7">
              <ColorText color={"green.main"}>+77</ColorText>
              <ColorText color={"neutral.normal"}> in last 28 days</ColorText>
            </Typography>
            <Divider sx={styles.divider} />
            <Typography variant="h7">Summery</Typography>
            <Typography variant="h8">
              <ColorText color={"neutral.normal"}>Last 28 days</ColorText>
            </Typography>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Views</Typography>
              <Typography variant="h6">225</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Watch Time (hours)</Typography>
              <Typography variant="h6">30</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Estimated Revenue</Typography>
              <Typography variant="h6">$450</Typography>
            </Box>
            <Divider sx={styles.divider} />
            <Typography variant="h6">Top videos</Typography>
            <Typography variant="h8">
              <ColorText color="neutral.normal">
                Last 48 hours. Views{" "}
              </ColorText>
            </Typography>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">
                How to become a software developer in 2025
              </Typography>
              <Typography variant="h6">450</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">
                CSS Grid tutorial: How to use Grids to make awesome user
                interfaces.
              </Typography>
              <Typography variant="h6">399</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">
                Call APIS in react native: practical guide
              </Typography>
              <Typography variant="h6">111</Typography>
            </Box>
            <Typography sx={styles.cardAction} variant="link">
              GO TO VIDEO ANALYTICS
            </Typography>
          </CardContent>
        </Card>

        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">Latest Comments</Typography>
            <Typography variant="h7">
              <ColorText color="neutral.normal">
                Channel comments I haven't responded to
              </ColorText>
            </Typography>
            <Box sx={styles.commentsRow}>
              <Avatar
                src="/src/assets/avatars/user.png"
                alt="Author"
                sx={styles.avatar}
              />
              <Box>
                <Box sx={styles.commentDetailsSection}>
                  <Typography sx={styles.postMeta}>React With Me</Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>
                <Typography sx={styles.commentText}>
                  Great video! I learned a lot from this. Thanks for sharing!
                </Typography>
              </Box>
              <Box
                component={"img"}
                sx={styles.videoThumbnail}
                src="/src/assets/thumbnail.png"
                alt="Video thumbnail"
              />
            </Box>
            <Divider sx={styles.divider} />
            <Box sx={styles.commentsRow}>
              <Avatar
                src="/src/assets/avatars/user.png"
                alt="Author"
                sx={styles.avatar}
              />
              <Box>
                <Box sx={styles.commentDetailsSection}>
                  <Typography sx={styles.postMeta}>React With Me</Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>
                <Typography sx={styles.commentText}>
                  How can I deploy this?
                </Typography>
              </Box>
              <Box
                component={"img"}
                sx={styles.videoThumbnail}
                src="/src/assets/thumbnail.png"
                alt="Video thumbnail"
              />
            </Box>
            <Divider sx={styles.divider} />
            <Box sx={styles.commentsRow}>
              <Avatar
                src="/src/assets/avatars/user.png"
                alt="Author"
                sx={styles.avatar}
              />
              <Box>
                <Box sx={styles.commentDetailsSection}>
                  <Typography sx={styles.postMeta}>React With Me</Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>
                <Typography sx={styles.commentText}>
                  Thank you for this. I have been looking for this for a long
                  time.
                </Typography>
              </Box>
              <Box
                component={"img"}
                sx={styles.videoThumbnail}
                src="/src/assets/thumbnail.png"
                alt="Video thumbnail"
              />
            </Box>
            <Typography sx={styles.cardAction} variant="link">
              VIEW MORE
            </Typography>
          </CardContent>
        </Card>

        <Card sx={styles.item}>
          <CardContent sx={styles.ideaContent}>
            <Box>
              <Typography variant="cardTitle">Ideas for you</Typography>
              <Typography sx={styles.ideasQuestion}>Channel name</Typography>
              <Typography variant="h7">
                Get tips from a successful creator on how to take a YouTube
                Channel and turn it to a business that earns you money.
              </Typography>
              <Typography sx={styles.cardAction} variant="link">
                GET STARTED NOW
              </Typography>
            </Box>
            <Box
              component={"img"}
              sx={styles.ideaImage}
              src="/src/assets/study-icon.png"
              alt="Study icon"
            />
          </CardContent>
        </Card>

        <Card sx={styles.item}>
          <CardContent sx={styles.ideaContent}>
            <Box>
              <Typography variant="cardTitle">Creator Insider</Typography>
              <Box
                component={"img"}
                sx={styles.insiderImage}
                src="/src/assets/thumbnail.png"
                alt="Thumbnail"
              />
              <Typography sx={styles.ideasQuestion}>
                Ready to boost your skills using AI tools?
              </Typography>
              <Typography variant="h7">
                Learn how to use AI tools to make your videos more engaging and
                reach a wider audience.
              </Typography>
              <Typography sx={styles.cardAction} variant="link">
                WATCH ON YOUTUBE
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

/** @type {import ("@mui/material").SxProps} */
const styles = {
  pageTitle: {
    mb: 2,
  },
  columnsContainer: {
    columns: "280px 3",
    maxWidth: 1400,
  },
  item: {
    mb: 2,
  },
  postAuthorSection: {
    display: "flex",
    alignItems: "center",
    my: 3,
  },
  avatar: {
    width: "30px",
    height: "auto",
    mr: 1,
  },
  postMeta: {
    mr: 1,
    fontSize: "0.8rem",
    color: "neutral.normal",
  },
  divider: {
    my: 2,
  },
  postStats: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    my: 3,
  },
  cardAction: {
    mt: 2,
  },
  videoStatsRow: {
    display: "flex",
    justifyContent: "space-between",
    mt: 2,
    "&:hover": {
      color: "primary.main",
      cursor: "pointer",
    },
  },
  commentsRow: {
    display: "flex",
    alignItems: "flex-start",
    mt: 2,
  },
  commentDetailsSection: {
    display: "flex",
    alignItems: "center",
  },
  commentText: {
    fontSize: "0.8rem",
    mt: 0.5,
    mr: 2,
  },
  videoThumbnail: {
    width: 80,
    ml: "auto",
  },
  ideaContent: {
    display: "flex",
  },
  ideasQuestion: {
    fontSize: "0.9rem",
    fontWeight: 500,
    my: 2,
  },
  ideaImage: {
    width: 80,
    alignSelf: "center",
    ml: 5,
  },
  insiderImage: {
    width: "100%",
    mt: 1,
  },
};

export default Dashboard;
