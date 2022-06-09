export default from '@react-native-async-storage/async-storage/jest/async-storage-mock'

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

it('checks if Async Storage is used', async () => {
    await asyncOperationOnAsyncStorage();

    expect(AsyncStorage.getItem).toBeCalledWith('myKey');
})