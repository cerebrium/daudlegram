import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Clear existing data in the correct order (due to foreign key constraints)
  console.log("🧹 Clearing existing data...");
  await prisma.like.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.follow.deleteMany();
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();
  console.log("✅ Cleared existing data");

  // Create sample users (these would normally be created via Clerk)
  const sampleUsers = await Promise.all([
    prisma.user.create({
      data: {
        clerkId: "demo_user_1",
        email: "demo@daudlegram.com",
        username: "demo_user",
        displayName: "Demo User",
        bio: "This is a demo user for testing daudlegram!",
        verified: true,
      },
    }),
    prisma.user.create({
      data: {
        clerkId: "demo_user_2",
        email: "jane@daudlegram.com",
        username: "jane_doe",
        displayName: "Jane Doe",
        bio: "Social media enthusiast 📱",
        verified: false,
      },
    }),
  ]);

  console.log(`✅ Created ${sampleUsers.length} users`);

  // Create sample posts
  const samplePosts = await Promise.all([
    prisma.post.create({
      data: {
        content:
          "Welcome to daudlegram! 🎉 This is my first post on this amazing platform.",
        userId: sampleUsers[0].id,
      },
    }),
    prisma.post.create({
      data: {
        content:
          "Just finished setting up my profile. Loving the clean design! ✨",
        userId: sampleUsers[1].id,
      },
    }),
    prisma.post.create({
      data: {
        content: "Beautiful sunset today 🌅 Perfect for a social media post!",
        userId: sampleUsers[0].id,
      },
    }),
  ]);

  console.log(`✅ Created ${samplePosts.length} posts`);

  // Create sample likes
  await prisma.like.createMany({
    data: [
      { userId: sampleUsers[1].id, postId: samplePosts[0].id },
      { userId: sampleUsers[0].id, postId: samplePosts[1].id },
      { userId: sampleUsers[1].id, postId: samplePosts[2].id },
    ],
  });

  console.log("✅ Created sample likes");

  // Create sample comments
  await prisma.comment.createMany({
    data: [
      {
        content: "Welcome to the platform! 👋",
        userId: sampleUsers[1].id,
        postId: samplePosts[0].id,
      },
      {
        content: "Thanks! Excited to be here!",
        userId: sampleUsers[0].id,
        postId: samplePosts[0].id,
      },
      {
        content: "Great photo! 📸",
        userId: sampleUsers[1].id,
        postId: samplePosts[2].id,
      },
    ],
  });

  console.log("✅ Created sample comments");

  // Create sample follows
  await prisma.follow.createMany({
    data: [
      {
        followerId: sampleUsers[1].id,
        followingId: sampleUsers[0].id,
      },
    ],
  });

  console.log("✅ Created sample follows");

  console.log("🎉 Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
