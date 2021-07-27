export default {
  data() {
    return {
      StoreSetting: {
        store_name: '',
        shipping_cost: 0,
        service_time: null,
        delivery_time: null,
        // オーダー受付開始時間
        start_order_hour: null,
        start_order_minutes: null,
        // 店舗開始時間
        open_hour: null,
        open_minutes: null,
        // オーダー受付終了時間
        last_order_hour: null,
        last_order_minutes: null,
        // 店舗終了時間
        close_hour: null,
        close_minutes: null,
        // モーニング終了時間
        close_morning_hour: null,
        close_morning_minutes: null,
        // ランチ終了時間
        close_lunch_hour: null,
        close_lunch_minutes: null,
        // スイーツ終了時間
        close_sweets_hour: null,
        close_sweets_minutes: null,
        // デリバリー、店舗Open
        is_delivery: true,
        is_open: true,
        // モーニング・ランチ・スイーツの実施状況
        is_morning: true,
        is_lunch: true,
        is_sweets: true,
      },
    }
  },
  methods: {
    onLog() {
      console.log('MIX INのログです')
    },
  },
  created() {
    console.log('MIX IN の　StoreSetting', this.StoreSetting)
  },
}
