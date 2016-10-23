var config = {}

config.MONGODB_CONNECT_URL = "mongodb://bzappasodi:megastar12@ds015710.mlab.com:15710/newswatcherdb";
config.JWT_SECRET = "MT1U7iBanmx7dIyDZA6YofBGCVyHcDFV";
config.NEWYORKTIMES_API_KEY = "<yoursecretkey>"
config.NEWYORKTIMES_CATEGORIES = ["world", "national", "business", "technology"];
config.GLOBAL_STORIES_ID = "MASTER_STORIES_DO_NOT_DELETE";
config.MAX_SHARED_STORIES = 30;
config.MAX_COMMENTS = 30;
config.MAX_FILTERS = 5;
config.MAX_FILTER_STORIES = 15;

module.exports = config;