const { portfolios, users } = require('./data');
const User = require('../database/models/user');
const { portfolios, users } = require('./data');

const Portfolio = require('../database/models/portfolio');
const User = require('../database/models/user');

class FakeDb {

  async clean() {
    await User.deleteMany({});
    await Portfolio.deleteMany({});
    await ForumCategory.deleteMany({});
    await Topic.deleteMany({});
    await Post.deleteMany({});
  }

  async addData() {
    await User.create(users);
    await Portfolio.create(portfolios);
    await ForumCategory.create(forumCategories);
    await Topic.create(topics);
    await Post.create(posts);
  }

  async populate() {
    await this.clean();
    await this.addData();
  }
}

module.exports = new FakeDb();
