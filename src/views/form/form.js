import card from '../../components/card/card.vue';

export default {
  name: 'Form',

  data() {
    return {
      meetData: [
        {
          meetName: '机器人大会',
          meetRoom: '会议室10086',
          meetTime: '2020-11-9 15:30:00',
          avator: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzcQP6vi4C5L3rmAsYrPXiSEGzcAEgkMZfpw&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREqFnS6MC5ESGtrprQ1_eLPW_ZpLB0NAtOqQ&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9qjMvXKTvRMHuOhiaO87rd8zXYoLv4hHpIg&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9Bq40IK_04Dl7lbTDLVxxTZJFsAb8pXWTmg&usqp=CAU'
          ],
        },
        {
          meetName: '午餐大会',
          meetRoom: '一号餐厅',
          meetTime: '2020-10-2 11:20:00',
          avator: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPuiosHLum3ekN-ak8l9uMspRy2w8u13QbFw&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwU7iD37RCFaRSh-_lb5idNB5lD6d085U7Qg&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvxTeVK-2U3a8DQpjJxz8rUY_jXGvPV79KAQ&usqp=CAU',
          ],
        },
        {
          meetName: '周一分享',
          meetRoom: '会议室3',
          meetTime: '2020-11-9 20:00:00',
          avator: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzBusK5xYaY5JJVLLx93bEYBW6rcQUVrasqQ&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSblLein3mdJUHUW2RBF0AHdsOSX1KxCISRAA&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4xL8O9yoRI2HVhfcNlDXmia6W_Augh1q3Xg&usqp=CAU',
            ''
          ]
        },
        {
          meetName: '晨会',
          meetRoom: '会议室7',
          meetTime: '2020-11-9 15:30:00',
          avator: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyrXBc6jvLl4hyFAFomQOztp77QLe8xEMESg&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSa6aoHxyfV7-4iqtbAP-nrazGjUTGi3IIZYA&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQC7GVwkwdMyOMOnGDBrNGRuWZn_Uq7YhxH7w&usqp=CAU',
            'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
          ]
        },
        {
          meetName: '机器人大会',
          meetRoom: '会议室10086',
          meetTime: '2020-11-9 15:30:00',
          avator: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzcQP6vi4C5L3rmAsYrPXiSEGzcAEgkMZfpw&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREqFnS6MC5ESGtrprQ1_eLPW_ZpLB0NAtOqQ&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9qjMvXKTvRMHuOhiaO87rd8zXYoLv4hHpIg&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9Bq40IK_04Dl7lbTDLVxxTZJFsAb8pXWTmg&usqp=CAU'
          ],
        },
        {
          meetName: '午餐大会',
          meetRoom: '一号餐厅',
          meetTime: '2020-10-2 11:20:00',
          avator: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPuiosHLum3ekN-ak8l9uMspRy2w8u13QbFw&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwU7iD37RCFaRSh-_lb5idNB5lD6d085U7Qg&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvxTeVK-2U3a8DQpjJxz8rUY_jXGvPV79KAQ&usqp=CAU',
          ],
        },
        {
          meetName: '周一分享',
          meetRoom: '会议室3',
          meetTime: '2020-11-9 20:00:00',
          avator: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzBusK5xYaY5JJVLLx93bEYBW6rcQUVrasqQ&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSblLein3mdJUHUW2RBF0AHdsOSX1KxCISRAA&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4xL8O9yoRI2HVhfcNlDXmia6W_Augh1q3Xg&usqp=CAU',
            ''
          ]
        },
        {
          meetName: '晨会',
          meetRoom: '会议室7',
          meetTime: '2020-11-9 15:30:00',
          avator: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyrXBc6jvLl4hyFAFomQOztp77QLe8xEMESg&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSa6aoHxyfV7-4iqtbAP-nrazGjUTGi3IIZYA&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQC7GVwkwdMyOMOnGDBrNGRuWZn_Uq7YhxH7w&usqp=CAU',
            'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
          ]
        },
      ],
    };
  },

  components: {
    card,
  },
};
