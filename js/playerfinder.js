// Fetching Data
class PlayerFinder {
    async getProfile(url) {
        const profileResponse = await fetch(url);

        const profileData = await profileResponse.json();

        return profileData;
    }
}