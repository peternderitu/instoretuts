import { types, flow} from 'mobx-state-tree'
import { UserAddressModel } from './UserAddresses';
import { baseApi } from '../api/Api';


export const CurrentUserModel = types.model('CurrentUserModel', {
    _id: types.identifier,
    firstName: types.string,
    lastName: types.string,
    avatarUrl: types.maybe(types.string),
    addresses: types.optional(types.array(UserAddressModel), []),

}).views(self=>({
    get addressesIsEmpty() {
        return self.addresses.length === 0;
    },
})).actions(self =>({
    createAddress: flow(function*(data){
        try {
           const res = yield baseApi.url('/addresses').auth(`Bearer`)
        } catch(error) {
            throw error;
        }
    })
}))