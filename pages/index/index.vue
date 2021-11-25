<template>
	<view class="content">
		<view class="tap_box">
			<scroll-view class="school_scroll" :scroll-x="scrollX" :show-scrollbar="scrollbar" :scroll-left="scrollLeft"
				:scroll-with-animation="scrollWithAnimation">
				<view class="school_list" v-for="(item, index) in tapTitle">{{item}}</view>
			</scroll-view>
		</view>
		<newTemplata></newTemplata>
		<van-switch :checked="checked" @change="onChange" />
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from "vuex";
	import newTemplata from '../../components/newTemplate/newTemplate.vue'
	export default {
		data() {
			return {
				scrollX: true,
				scrollWithAnimation: false,
				scrollLeft: 0,
				checked: true,
				scrollbar: 3,
				tapTitle: ["推荐","本校", "本市", "本省", "本校", "本市", "本省", "本校", "本市", "本省", "本校", "本市", "本省", "本校", "本市", "本省"]
			}
		},
		onLoad() {
			this.getShopList()
		},
		computed: {
			...mapState('user', ['dotData'])
		},
		components: {
			newTemplata
		},
		methods: {
			...mapActions('user', ['getShopList']),
			onChange() {
				this.checked = !this.checked;
			}
		}
	}
</script>

<style>
	.tap_box {
		height: 80rpx;
		overflow: hidden;
	}
	.school_scroll {
		white-space: nowrap;
	}
	.school_list {
		display: inline-block;
		box-sizing: border-box;
		padding: 0 20rpx;
		height: 100rpx;
		line-height: 80rpx;
		font-size: 32rpx;
	}
</style>
