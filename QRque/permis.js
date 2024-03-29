public class MainActivity extends AppCompatActivity implements
EasyPermissions.PermissionCallbacks {

	WebView myWebView;

	private String TAG = "TEST";
	private PermissionRequest mPermissionRequest;

	private static final int REQUEST_CAMERA_PERMISSION = 1;
	private static final String[] PERM_CAMERA = {
		Manifest.permission.CAMERA
	};

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		myWebView = new WebView(this);

		myWebView.getSettings().setJavaScriptEnabled(true);
		myWebView.getSettings().setAllowFileAccessFromFileURLs(true);
		myWebView.getSettings().setAllowUniversalAccessFromFileURLs(true);

		//myWebView.setWebViewClient(new WebViewClient());
		myWebView.setWebChromeClient(new WebChromeClient() {
			// Grant permissions for cam
			@Override
			public void onPermissionRequest(final PermissionRequest request) {
				Log.i(TAG, "onPermissionRequest");
				mPermissionRequest = request;
				final String[] requestedResources = request.getResources();
				for (String r: requestedResources) {
					if (r.equals(PermissionRequest.RESOURCE_VIDEO_CAPTURE)) {
						// In this sample, we only accept video capture request.
						AlertDialog.Builder alertDialogBuilder = new AlertDialog.Builder(MainActivity.this)
							.setTitle("Allow Permission to camera")
							.setPositiveButton("Allow", new DialogInterface.OnClickListener() {
								@Override
								public void onClick(DialogInterface dialog, int which) {
									dialog.dismiss();
									mPermissionRequest.grant(new String[] {
										PermissionRequest.RESOURCE_VIDEO_CAPTURE
									});
									Log.d(TAG, "Granted");
								}
							})
							.setNegativeButton("Deny", new DialogInterface.OnClickListener() {
								@Override
								public void onClick(DialogInterface dialog, int which) {
									dialog.dismiss();
									mPermissionRequest.deny();
									Log.d(TAG, "Denied");
								}
							});
						AlertDialog alertDialog = alertDialogBuilder.create();
						alertDialog.show();

						break;
					}
				}
			}

			@Override
			public void onPermissionRequestCanceled(PermissionRequest request) {
				super.onPermissionRequestCanceled(request);
				Toast.makeText(MainActivity.this, "Permission Denied", Toast.LENGTH_SHORT).show();
			}
		});


		if (hasCameraPermission()) {
			myWebView.loadUrl("https://dahe165.github.io/QRque/qrque");
			setContentView(myWebView);
		} else {
			EasyPermissions.requestPermissions(
				this,
				"This app needs access to your camera so you can take pictures.",
				REQUEST_CAMERA_PERMISSION,
				PERM_CAMERA);
		}

	}





	private boolean hasCameraPermission() {
		return EasyPermissions.hasPermissions(MainActivity.this, PERM_CAMERA);
	}

	@Override
	public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
		super.onRequestPermissionsResult(requestCode, permissions, grantResults);

		EasyPermissions.onRequestPermissionsResult(requestCode, permissions, grantResults, this);
	}

	@Override
	public void onPermissionsGranted(int requestCode, @NonNull List < String > perms) {

	}

	@Override
	public void onPermissionsDenied(int requestCode, @NonNull List < String > perms) {

	}
}
