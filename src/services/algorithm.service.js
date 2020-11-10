/* eslint-disable */
import APIService from './api';

class AlgorithmService {
  constructor() {
    this.api = APIService;
  }

  /**
   * get list of algorithm
   * @param {String} space_id
   */
  async list(space_id) {
    return this.api.get(`/spaces/${space_id}/algorithm`);
  }

  /**
   * get list of released algorithm
   * @param {String} space_id
   * @param {Object} isRelease
   *  has_released {Boolean}
   */
  async listReleased(space_id, isRelease) {
    return this.api.get(`/spaces/${space_id}/algorithm`, isRelease);
  }

  /**
   * craete algorithm
   * @param {String} space_id
   * @param {object} data
   *  data.name {String}
   *  data.description {String}
   */
  async create(space_id, data) {
    // http://10.8.0.164:8000/v1/spaces/{space_id}/algorithm
    return this.api.post(`/spaces/${space_id}/algorithm`, data);
  }

  /**
   * update algorithm
   * @param {String} space_id
   * @param {String} algorithm_id
   * @param {Project} data
   *  data.name {String}
   *  data.description {String}
   */
  async update(space_id, algorithm_id, data) {
    // http://10.8.0.164:8000/v1/spaces/{space_id}/algorithm/{algorithm_id}
    return this.api.patch(`/spaces/${space_id}/algorithm/${algorithm_id}`, data);
  }

  /**
   * delete algorithm
   * @param {String} space_id
   * @param {String} algorithm_id
   */
  async delete(space_id, algorithm_id) {
    // http://10.8.0.164:8000/v1/spaces/{space_id}/algorithm/{algorithm_id}
    return this.api.delete(`/spaces/${space_id}/algorithm/${algorithm_id}`);
  }

  /**
   * get algorithm detail
   * @param {String} space_id
   * @param {String} algorithm_id
   */
  async getDetail(space_id, algorithm_id) {
    return this.api.get(`/spaces/${space_id}/algorithm/${algorithm_id}`);
  }

  /**
   * get algorithm all versions
   * @param {String} space_id
   * @param {String} algorithm_id
   */
  async getVersions(space_id, algorithm_id) {
    // http://10.8.0.164:8000/v1/spaces/{space_id}/algorithm/{algorithm_id}/version
    return this.api.get(`/spaces/${space_id}/algorithm/${algorithm_id}/version`);
  }

  /**
   * get the default algorithm name
   * @param {String} space_id
   * @param {String} algorithm_id
   */
  async getDefaultVersion(space_id, algorithm_id) {
    return this.api.get(`/spaces/${space_id}/algorithm/${algorithm_id}/version/new_tag`);
  }

  /**
   * push algorithm new versions
   * @param {String} space_id
   * @param {String} algorithm_id
   */
  async pushVersions(space_id, algorithm_id, data) {
    // http://192.168.130.30:8081/v1/spaces/{space_id}/algorithm/{algorithm_id}/release
    return this.api.post(`/spaces/${space_id}/algorithm/${algorithm_id}/release`, data);
  }

  /**
   * delete algorithm versions
   * @param {String} space_id
   * @param {String} algorithm_id
   * @param {String} version_id
   */
  async deleteVersions(space_id, algorithm_id, version_id) {
    // http://10.8.0.164:8000/v1/spaces/{space_id}/algorithm/{algorithm_id}/version/{version_id}
    return this.api.delete(`/spaces/${space_id}/algorithm/${algorithm_id}/version/${version_id}`);
  }

  /**
   * get frame lsit
   * @param {String} space_id
   */
  async getFrame(space_id) {
    // http://10.8.0.164:8000/v1/spaces/{space_id}/frameworks
    return this.api.get(`/spaces/${space_id}/frameworks`);
  }

  /**
   * get resource lsit
   * @param {String} space_id
   */
  async getResource(space_id) {
    // http://10.8.0.164:8000/v1/spaces/{space_id}/algorithm/workbench/resource_type
    return this.api.get(`/spaces/${space_id}/algorithm/workbench/resource_type`);
  }

  /**
   * craete workbench
   * @param {String} space_id
   * @param {String} algorithm_id
   * @param {object} data
   *  data.command {String}
   *  data.data_in_container_path {String}
   *  data.dataset_id {String}
   *  data.framework_id {String}
   *  data.output_path {String}
   *  data.resource_id {String}
   *  data.slave_count {String}
   */
  async createWorkbench(space_id, algorithm_id, data) {
    // http://10.8.0.164:8000/v1/spaces/{space_id}/algorithm/{algorithm_id}/workbench
    return this.api.post(`/spaces/${space_id}/algorithm/${algorithm_id}/workbench`, data);
  }

  /**
   * update workbench
   * @param {String} space_id
   * @param {String} algorithm_id
   * @param {object} data
   *  data.command {String}
   *  data.data_in_container_path {String}
   *  data.dataset_id {String}
   *  data.framework_id {String}
   *  data.output_path {String}
   *  data.resource_id {String}
   *  data.slave_count {String}
   *  data.status {String}  stop running creating
   */
  async updateWorkbench(space_id, algorithm_id, data) {
    // http://10.8.0.164:8000/v1/spaces/{space_id}/algorithm/{algorithm_id}/workbench
    return this.api.patch(`/spaces/${space_id}/algorithm/${algorithm_id}/workbench`, data);
  }

  /**
   * delete workbench
   * @param {String} space_id
   * @param {String} algorithm_id
   */
  async deleteWorkbench(space_id, algorithm_id) {
    // http://10.8.0.164:8000/v1/spaces/{space_id}/algorithm/{algorithm_id}/workbench
    return this.api.delete(`/spaces/${space_id}/algorithm/${algorithm_id}/workbench`);
  }

  /**
   * get workbench detail
   * @param {String} space_id
   * @param {String} algorithm_id
   */
  async getWorkbench(space_id, algorithm_id) {
    // http://10.8.0.164:8000/v1/spaces/{space_id}/algorithm/{algorithm_id}/workbench
    return this.api.get(`/spaces/${space_id}/algorithm/${algorithm_id}/workbench`);
  }

  /**
   * update workbench resource
   * @param {String} space_id
   * @param {String} algorithm_id
   * @param {object} data
   *  data.container_configuration {object}
   */
  async updateResource(space_id, algorithm_id, data) {
    // http://192.168.130.30:8081/v1/spaces/{space_id}/algorithm/{algorithm_id}/workbench/resource
    return this.api.patch(`/spaces/${space_id}/algorithm/${algorithm_id}/workbench/resource`, data);
  }
  
}

export default new AlgorithmService();
