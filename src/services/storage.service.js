import Storage from '@/config/storage';
import { LS_KYES } from '@/config/constants';

/**
 * all localStorage/sessionStorage operatino in this service.
 * @private private class using in auth.service
 * @kind cache.service
 */
class StorageCache {
  constructor() {
    this.store = Storage.getLocalStorage();
  }

  // clear

  clear() {
    this.store.clear();
  }

  // user

  saveUser(user) {
    return this.store.set(LS_KYES.USER, user);
  }

  getUser() {
    return this.store.get(LS_KYES.USER);
  }

  removeUser() {
    return this.store.remove(LS_KYES.USER);
  }

  // token

  saveToken(token) {
    return this.store.set(LS_KYES.TOKEN, token);
  }

  getToken() {
    return this.store.get(LS_KYES.TOKEN);
  }

  removeToken() {
    return this.store.remove(LS_KYES.TOKEN);
  }

  // activeName
  getActive() {
    return this.store.get(LS_KYES.ACTIVE);
  }

  saveActive(activeName) {
    this.store.set(LS_KYES.ACTIVE, activeName);
  }

  removeActive() {
    this.store.remove(LS_KYES.ACTIVE);
  }

  // spaces
  getSpaces() {
    return this.store.get(LS_KYES.SPACES);
  }

  saveSpaces(spaces) {
    this.store.set(LS_KYES.SPACES, spaces);
  }

  removeSpaces() {
    this.store.remove(LS_KYES.SPACES);
  }

  // space
  getSpace() {
    return this.store.get(LS_KYES.SPACE);
  }

  saveSpace(space) {
    this.store.set(LS_KYES.SPACE, space);
  }

  removeSpace() {
    this.store.remove(LS_KYES.SPACE);
  }

  getProject() {
    return this.store.get(LS_KYES.PROJECT);
  }

  saveProject(project) {
    this.store.set(LS_KYES.PROJECT, project);
  }

  removeProject() {
    this.store.remove(LS_KYES.PROJECT);
  }
}

export default new StorageCache();
