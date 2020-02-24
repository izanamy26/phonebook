export default {
    getUsersList(state, users) {
        state.users = users;
    },

    sortData(state, { by, type }) {
        switch (by) {
            case 'name':
                state.users.sort((a, b) => {
                    return type === 'asc' ? a.Name.localeCompare(b.Name) : b.Name.localeCompare(a.Name);
                });

                break;

            case 'date':
                state.users.sort((a, b) => {
                    const dateA = new Date(a.BirthDate).getTime();
                    const dateB = new Date(b.BirthDate).getTime();

                    return type === 'asc' ? dateB - dateA : dateA - dateB;
                });

                break;
        }
    }
}