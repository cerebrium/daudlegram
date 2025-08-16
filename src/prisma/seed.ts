import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Sample data for generating realistic content
const firstNames = ["Alex", "Jordan", "Taylor", "Casey", "Morgan", "Riley", "Avery", "Quinn", "Blake", "Cameron", "Drew", "Emery", "Finley", "Harper", "Hayden", "Indigo", "Jamie", "Kai", "Logan", "Max", "Nova", "Ocean", "Parker", "River", "Sage", "Skyler", "Storm", "Sunny", "Tatum", "Wren"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson"];

const bios = [
  "Living life one post at a time ✨",
  "Coffee enthusiast ☕ | Photography lover 📸",
  "Travel addict 🌍 Sharing my adventures",
  "Fitness enthusiast 💪 Spreading good vibes",
  "Artist at heart 🎨 Creating daily",
  "Tech lover 💻 Building the future",
  "Foodie 🍕 Always hungry for more",
  "Music lover 🎵 Dancing through life",
  "Book worm 📚 Lost in stories",
  "Nature lover 🌱 Protecting our planet",
  "Entrepreneur 🚀 Chasing dreams",
  "Student 🎓 Learning every day",
  "Parent 👨‍👩‍👧‍👦 Family first",
  "Pet lover 🐕 Rescue advocate",
  "Sports fan ⚽ Game day every day"
];

const postContents = [
  "Just had the most amazing coffee this morning! ☕ Starting the day right",
  "Beautiful sunset tonight 🌅 Nature never fails to amaze me",
  "Working on something exciting today! Can't wait to share 🔥",
  "Grateful for all the wonderful people in my life 💕",
  "New week, new opportunities! Let's make it count 💪",
  "Sometimes the best therapy is a long walk 🚶‍♀️",
  "Cooking up something delicious for dinner tonight 🍝",
  "Weekend vibes are the best vibes ✨",
  "Learning something new every day keeps life interesting 📚",
  "Music has the power to change everything 🎵",
  "Fresh flowers always brighten up the room 🌸",
  "Technology is moving so fast, it's incredible to witness 💻",
  "Found a new favorite book today! Recommendations anyone? 📖",
  "Workout complete! Feeling energized and ready for the day 🏃‍♂️",
  "Family time is the best time 👨‍👩‍👧‍👦",
  "Trying out a new recipe today. Wish me luck! 👨‍🍳",
  "The view from here is absolutely breathtaking 🏔️",
  "Small wins deserve celebration too! 🎉",
  "Rainy days are perfect for creative projects ☔",
  "Nothing beats a good laugh with friends 😂",
  "Planning my next adventure! Where should I go? 🗺️",
  "Morning meditation sets the tone for everything 🧘‍♀️",
  "Local farmers market finds! Supporting small business 🥕",
  "Late night coding session. The bugs won't fix themselves 👨‍💻",
  "Spontaneous road trip? Count me in! 🚗",
  "Art gallery visit today. So much inspiration 🖼️",
  "Homemade pizza night with the crew 🍕",
  "Beach day = perfect day 🏖️",
  "Reading in the park, life is good 📚",
  "New haircut, new me! ✂️"
];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateUsername(firstName: string, lastName: string, index: number = 0): string {
  const timestamp = Date.now().toString().slice(-4);
  const randomNum = getRandomNumber(1, 9999);
  const variations = [
    `${firstName.toLowerCase()}_${lastName.toLowerCase()}_${index}`,
    `${firstName.toLowerCase()}${lastName.toLowerCase()}${randomNum}`,
    `${firstName.toLowerCase()}.${lastName.toLowerCase()}.${timestamp}`,
    `${firstName.toLowerCase()}${randomNum}`,
    `${firstName.toLowerCase()}_${timestamp}_${index}`
  ];
  return getRandomElement(variations);
}

async function createPostsForUser(userId: string, minPosts: number = 15) {
  const postCount = Math.max(minPosts, getRandomNumber(15, 25)); // At least 15, up to 25 posts
  const posts = [];
  
  for (let i = 0; i < postCount; i++) {
    // Create posts with varying timestamps over the past year
    const daysAgo = Math.floor(Math.random() * 365);
    const hoursAgo = Math.floor(Math.random() * 24);
    const minutesAgo = Math.floor(Math.random() * 60);
    const createdAt = new Date();
    createdAt.setDate(createdAt.getDate() - daysAgo);
    createdAt.setHours(createdAt.getHours() - hoursAgo);
    createdAt.setMinutes(createdAt.getMinutes() - minutesAgo);
    
    const post = await prisma.post.create({
      data: {
        content: getRandomElement(postContents),
        userId: userId,
        createdAt: createdAt,
      },
    });
    posts.push(post);
  }
  
  return posts;
}

async function main() {
  console.log("🌱 Seeding database with hundreds of posts and realistic user networks...");

  // Clear existing data in the correct order (due to foreign key constraints)
  console.log("🧹 Clearing existing data...");
  await prisma.like.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.follow.deleteMany();
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();
  console.log("✅ Cleared existing data");

  // Create the special user first
  console.log("👤 Creating Nicholas user...");
  const nicholasUser = await prisma.user.create({
    data: {
      clerkId: 'nicholas_clerk_id',
      email: 'nicholas.m.shankland@gmail.com',
      username: 'nicholas.shankland',
      displayName: 'Nicholas Shankland',
      bio: 'Building amazing things with code 💻 | Creator of daudlegram 🚀',
      verified: true,
    },
  });
  console.log("✅ Created Nicholas user");

  // Create 50 followers for Nicholas
  console.log("👥 Creating 50 followers for Nicholas...");
  const nicholasFollowers = [];
  
  for (let i = 0; i < 50; i++) {
    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
    const username = generateUsername(firstName, lastName, i + 100); // Start from 100 to avoid conflicts
    
    const follower = await prisma.user.create({
      data: {
        clerkId: `nicholas_follower_${i + 1}`,
        email: `${username}@daudlegram.com`,
        username: username,
        displayName: `${firstName} ${lastName}`,
        bio: getRandomElement(bios),
        verified: Math.random() < 0.05, // 5% chance of being verified
      },
    });
    nicholasFollowers.push(follower);
  }
  console.log(`✅ Created ${nicholasFollowers.length} followers for Nicholas`);

  // Create follow relationships for Nicholas's followers
  console.log("🤝 Creating follow relationships for Nicholas's followers...");
  const followRelationships = [];
  
  for (const follower of nicholasFollowers) {
    // Each follower follows Nicholas
    followRelationships.push({
      followerId: follower.id,
      followingId: nicholasUser.id,
    });
  }
  
  await prisma.follow.createMany({
    data: followRelationships,
  });
  console.log(`✅ Created ${followRelationships.length} follow relationships`);

  // Create at least 15 posts for each of Nicholas's followers
  console.log("📝 Creating posts for Nicholas's followers...");
  let totalFollowerPosts = 0;
  
  for (const follower of nicholasFollowers) {
    const posts = await createPostsForUser(follower.id, 15);
    totalFollowerPosts += posts.length;
    console.log(`   Created ${posts.length} posts for ${follower.displayName}`);
  }
  console.log(`✅ Created ${totalFollowerPosts} posts for Nicholas's followers`);

  // Create some posts for Nicholas too
  console.log("📝 Creating posts for Nicholas...");
  const nicholasPosts = await createPostsForUser(nicholasUser.id, 10);
  console.log(`✅ Created ${nicholasPosts.length} posts for Nicholas`);

  // Create additional regular users (optional)
  console.log("👥 Creating additional users...");
  const additionalUsers = [];
  for (let i = 0; i < 50; i++) {
    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
    const username = generateUsername(firstName, lastName, i + 200); // Start from 200 to avoid conflicts
    
    const user = await prisma.user.create({
      data: {
        clerkId: `demo_user_${i + 1}`,
        email: `${username}@daudlegram.com`,
        username: username,
        displayName: `${firstName} ${lastName}`,
        bio: getRandomElement(bios),
        verified: Math.random() < 0.1, // 10% chance of being verified
      },
    });
    additionalUsers.push(user);
  }
  console.log(`✅ Created ${additionalUsers.length} additional users`);

  // Create posts for additional users
  console.log("📝 Creating posts for additional users...");
  let additionalPosts = 0;
  for (const user of additionalUsers) {
    const posts = await createPostsForUser(user.id, getRandomNumber(5, 20));
    additionalPosts += posts.length;
  }
  console.log(`✅ Created ${additionalPosts} posts for additional users`);

  // Create some cross-follows between additional users and Nicholas's followers
  console.log("🤝 Creating additional follow relationships...");
  const allUsers = [...nicholasFollowers, ...additionalUsers];
  const additionalFollows = [];
  
  for (const user of additionalUsers) {
    const followCount = getRandomNumber(5, 15);
    const potentialFollows = allUsers.filter(u => u.id !== user.id);
    const shuffled = potentialFollows.sort(() => 0.5 - Math.random());
    const usersToFollow = shuffled.slice(0, followCount);
    
    for (const userToFollow of usersToFollow) {
      additionalFollows.push({
        followerId: user.id,
        followingId: userToFollow.id,
      });
    }
  }
  
  await prisma.follow.createMany({
    data: additionalFollows,
  });
  console.log(`✅ Created ${additionalFollows.length} additional follow relationships`);

  // Get all posts for likes and comments
  const allPosts = await prisma.post.findMany();

  // Create likes
  console.log("❤️ Creating likes...");
  const likes = new Set<string>();
  const allUsersIncludingNicholas = [nicholasUser, ...nicholasFollowers, ...additionalUsers];
  
  while (likes.size < 3000) {
    const randomUser = getRandomElement(allUsersIncludingNicholas);
    const randomPost = getRandomElement(allPosts);
    
    if (randomUser.id !== randomPost.userId) {
      const likeKey = `${randomUser.id}-${randomPost.id}`;
      likes.add(likeKey);
    }
  }
  
  const likeData = Array.from(likes).map(likeKey => {
    const [userId, postId] = likeKey.split('-');
    return { userId, postId };
  });
  
  const batchSize = 500;
  for (let i = 0; i < likeData.length; i += batchSize) {
    const batch = likeData.slice(i, i + batchSize);
    await prisma.like.createMany({
      data: batch,
    });
  }
  console.log(`✅ Created ${likeData.length} likes`);

  // Create comments
  console.log("💬 Creating comments...");
  const commentTexts = [
    "Love this! 💕",
    "So relatable 😂",
    "Amazing shot! 📸",
    "This made my day ✨",
    "Couldn't agree more!",
    "Thanks for sharing this 🙏",
    "Absolutely beautiful!",
    "You're inspiring! 🌟",
    "This is everything! 🔥",
    "So true! 💯",
    "Great perspective!",
    "This hits different 😍",
    "Living for this content!",
    "You always know what to say",
    "Perfect timing for this post!"
  ];
  
  for (let i = 0; i < 1500; i++) {
    const randomUser = getRandomElement(allUsersIncludingNicholas);
    const randomPost = getRandomElement(allPosts);
    const randomCommentText = getRandomElement(commentTexts);
    
    await prisma.comment.create({
      data: {
        content: randomCommentText,
        userId: randomUser.id,
        postId: randomPost.id,
      },
    });
  }
  console.log("✅ Created 1500 comments");

  console.log("🎉 Seeding completed successfully!");
  console.log(`📊 Final stats:`);
  console.log(`   👥 Total Users: ${1 + nicholasFollowers.length + additionalUsers.length}`);
  console.log(`   👤 Nicholas's Followers: ${nicholasFollowers.length}`);
  console.log(`   📝 Total Posts: ${allPosts.length}`);
  console.log(`   📝 Nicholas's Follower Posts: ${totalFollowerPosts}`);
  console.log(`   🤝 Total Follows: ${followRelationships.length + additionalFollows.length}`);
  console.log(`   ❤️ Likes: ${likeData.length}`);
  console.log(`   💬 Comments: 1500`);
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
