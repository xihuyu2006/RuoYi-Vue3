import request from '@/utils/request'
import {parseStrEmpty} from "@/utils/ruoyi";

// 查询cab列表
export function listCab(query) {
    return request({
        url: '/testmanagement/cab/list',
        headers: {
            isToken: false
        },
        method: 'get',
        params: query
    })
}

// 查询cab详细
export function getCab(cabId) {
    return request({
        url: '/testmanagement/cab/' + parseStrEmpty(cabId),
        method: 'get'
    })
}


// 新增cab
export function addCab(data) {
    return request({
        url: '/testmanagement/cab',
        method: 'post',
        data: data
    })
}

// 修改cab
export function updateCab(data) {
    return request({
        url: '/testmanagement/cab',
        method: 'put',
        data: data
    })
}

// 删除cab
export function delCab(cabId) {
    return request({
        url: '/testmanagement/cab/' + cabId,
        method: 'delete'
    })
}


// 修改cab状态
export function changeCabStatus(cabId, status) {
    const data = {
        cabId,
        status
    }
    return request({
        url: '/testmanagement/cab/changeStatus',
        method: 'put',
        data: data
    })
}





