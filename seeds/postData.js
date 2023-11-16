const { Post } = require('../models');

const postData = [
  {
    topic: "Hello world",
    post_body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at nisi laoreet pulvinar. Maecenas laoreet turpis ac efficitur volutpat. Fusce mattis vestibulum cursus. Donec dapibus tellus at augue convallis ornare. Cras tincidunt molestie efficitur. Morbi malesuada lacus id dictum lobortis. Aliquam sodales tellus feugiat nunc tempor faucibus. Donec sodales dui in lacus lacinia, ut faucibus nulla tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer finibus urna in felis tempor lobortis. Donec et metus ut dui lobortis malesuada id quis sem. Duis ac nisi ac sem porttitor ornare id tempor sapien. Pellentesque nisi augue, congue nec semper vel, luctus quis lectus.",
    author_id: 1,
    date: "1/1/23"
  },
  {
    topic: "Music Biznuss",
    post_body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at nisi laoreet pulvinar. Maecenas laoreet turpis ac efficitur volutpat. Fusce mattis vestibulum cursus. Donec dapibus tellus at augue convallis ornare. Cras tincidunt molestie efficitur. Morbi malesuada lacus id dictum lobortis. Aliquam sodales tellus feugiat nunc tempor faucibus. Donec sodales dui in lacus lacinia, ut faucibus nulla tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer finibus urna in felis tempor lobortis. Donec et metus ut dui lobortis malesuada id quis sem. Duis ac nisi ac sem porttitor ornare id tempor sapien. Pellentesque nisi augue, congue nec semper vel, luctus quis lectus.",
    author_id: 2,
    date: "1/3/23"
  },
  {
    topic: "Admin test",
    post_body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at nisi laoreet pulvinar. Maecenas laoreet turpis ac efficitur volutpat. Fusce mattis vestibulum cursus. Donec dapibus tellus at augue convallis ornare. Cras tincidunt molestie efficitur. Morbi malesuada lacus id dictum lobortis. Aliquam sodales tellus feugiat nunc tempor faucibus. Donec sodales dui in lacus lacinia, ut faucibus nulla tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer finibus urna in felis tempor lobortis. Donec et metus ut dui lobortis malesuada id quis sem. Duis ac nisi ac sem porttitor ornare id tempor sapien. Pellentesque nisi augue, congue nec semper vel, luctus quis lectus.",
    author_id: 2,
    date: "1/3/23"
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;