<template>
	<view class="posts">
		<view class="posts_title">
			<image class="posts_user_head_img" src="" mode=""></image>
			<view class="posts_user_name">像少年啦飞驰</view>
		</view>
		<view class="posts_content">
			<view class="posts_content_text">
				在某个时候我有一个朋友，号称铁牛，铁牛的特征是看上去像头铁牛。我们当时学一篇课文，说到长江有一个急弯的地方有一个小镇，那里就有两座镇江的铁牛时，大家和铁牛相视而笑。当时铁牛就很豪迈，举手说，报告老师，我以后要去支援长江的建设。那时正开家长会，大家纷纷向铁牛的爹恭喜说国家有希望了。铁牛以后就有了一个习惯，就是上课中无论什么时候，在国家需要他的时候就会挺身而出支援建设。在小学四年级的时候，我和铁牛双双留级，理由是考试的时候铁牛看我的试卷。偷看是没有错的，错就错在铁牛偷看的是我的，但是我因为没有及格留级了，所以铁牛也付出了代价。
			</view>
			<view class="posts_content_img_list">
				<image src="" mode=""></image>
				<image src="" mode=""></image>
				<image src="" mode=""></image>
				<image src="" mode=""></image>
			</view>
			<view class="posts_school">
				#泰兴市第四高级中学
			</view>
		</view>
		<view class="">
			<slot></slot>
		</view>
		<view class="posts_botttom">
			<view class="">
				<image src="../../static/image/forward.png" mode=""></image>
			</view>
			<view class="">
				<image src="../../static/image/comment.png" mode=""></image>
				<text>3988</text>
			</view>
			<view class="">
				<image src="../../static/image/arrow_down.png" mode=""></image>
				<text>3988</text>
				<image src="../../static/image/arrow_up.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "newTemplate",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.posts {
		width: calc(100vw - 60rpx);
		margin: 0 auto;
	}

	.posts_title {
		display: flex;
		justify-content: flex-start;
	}

	.posts_user_head_img {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}

	.posts_user_name {
		font-size: 28rpx;
		line-height: 80rpx;
	}

	.posts_content {
		font-size: 28rpx;
		line-height: 44rpx;
		height: 176rpx;
		overflow: hidden;
		/** 隐藏超出的内容 **/
		text-overflow: ellipsis;
		/** 多行 **/
		display: -webkit-box;
		-webkit-line-clamp: 4;
		/** 显示的行数 **/
		-webkit-box-orient: vertical;
	}
</style>
