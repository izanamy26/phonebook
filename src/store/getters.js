export default {
    users: state => state.users.map((item) => {
        if (! /\/$/.test(item.Photo)) {
            item.Photo += '/';
        }

        return item;
    }),

    user: state => id => {
        return state.users.find(user => user.id === id);
      }
}