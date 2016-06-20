
function onNavigatingTo(args) {
    var page = args.object;

}
exports.onNavigatingTo = onNavigatingTo;

exports.creatingView = function(args) {
    try {

        var youTubePlayerFragment = com.google.android.youtube.player.YouTubePlayerFragment.newInstance();

        youTubePlayerFragment.initialize("AIzaSyApfrMXAC3SckEBQ_LOrNDA5qUcDAZAevQ", new com.google.android.youtube.player.YouTubePlayer.OnInitializedListener({
            onInitializationFailure : function (provider, error) {
                console.log("onInitializationFailure");
                console.log(error);
            },
            onInitializationSuccess : function (provider, player, wasRestored) {
                player.setFullscreen(true);
                player.loadVideo("2zNSgSzhBfM"); // videoID
                player.play();
            }
        }));

        var fragmentManager = args.context.getFragmentManager();
        var fragmentTransaction = fragmentManager.beginTransaction();

        var framelayout = new android.widget.FrameLayout(args.context);
        framelayout.setLayoutParams(new android.widget.FrameLayout.LayoutParams(android.widget.FrameLayout.LayoutParams.MATCH_PARENT, 
                                                                                android.widget.FrameLayout.LayoutParams.MATCH_PARENT));
        framelayout.setId(android.view.View.generateViewId());
        fragmentTransaction.add(framelayout.getId(), youTubePlayerFragment).commit();
        // fragmentTransaction.commit();
        args.view = framelayout;
    } catch (ex) {
        console.log(ex);
    }
};
