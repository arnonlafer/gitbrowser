<html>
	<head>
		<title>cPnael | new name</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="admin/js/cpanel.js"></script>
		<link rel="stylesheet" href="admin/css/cpanel.css">
		<link href="https://fonts.googleapis.com/css?family=Ropa+Sans" rel="stylesheet">
		<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
		<link href="assets/css/treeview/file-tree.min.css" rel="stylesheet">
		
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
		<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script> 
		<script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script> 
		<script src="assets/js/treeview/file-tree.min.js"></script> 
		<script src="assets/js/treeview/data.js"></script> 
		<script src="assets/js/treeview/main.js"></script>
		<script src="assets/js/treeview/admin_tree.js"></script>
	</head>
	<body>
	
		<div id="cmen">
			<center><span id="cmen_ttl">cPanel</span></center>
			<p class="b_ttl">Website Setting</p>
			<input type="button" v="0" value="Update Logo" class="cmen_but" style="background: transparent; font-weight: normal;">
			<input type="button" v="2" value="Update Title" class="cmen_but" style="background: transparent; font-weight: normal;">
			<input type="button" v="1" value="Update Carousel" class="cmen_but" style="background: transparent; font-weight: normal;">
			<input type="button" v="3" value="Update Credentials" class="cmen_but" style="background: transparent; font-weight: normal;">
			<p class="b_ttl">Tree View</p>
			<input type="button" v="4" value="Create Menu" class="cmen_but" style="background: rgb(45, 51, 67); font-weight: 600;">
			<input type="button" v="5" value="Edit Menu" class="cmen_but" style="background: transparent; font-weight: normal;">
			<input type="button" v="6" value="Delete Menu" class="cmen_but" style="background: transparent; font-weight: normal;">
		</div>
		<div id="cbod">
			<!--<div id="ads_pa" i="1" class="m_unit" style="display: none;">
				<br><br>
				<label>Platinum Agencies Ads | Enter PID</label>
				<br><br>
				<form target="_blank" action="" method="post" class="bc_frm" fi="1">
				<input type="text" name="pt1" required="" placeholder="PID # 1">
				<input type="text" name="pt2" required="" placeholder="PID # 2">
				<input type="text" name="pt3" required="" placeholder="PID # 3">
				<br>
				<input type="text" name="pt4" required="" placeholder="PID # 4">
				<input type="text" name="pt5" required="" placeholder="PID # 5">
				<input type="text" name="pt6" required="" placeholder="PID # 6">
				<br>
				<input type="submit" name="ptsb">
				</form>
			</div>-->
			<div id='' class='m_unit' i = '1' style='display:none'>
				<br><br>
				<label>Update Logo</label>
				<br>
				<img src='assets/img/logo.png' style='margin : 20px 0px; max-width : 200px'>
				<form target="_blank" action='assets/update_assets.php' enctype='multipart/form-data' method = "post">
					<input type='file' name='logo'>
					<input type='submit' name = 'update_logo'>
				</form>
			</div>
			<div id='' class='m_unit' i = '2' style='display : none'>
				<br><br>
				<label>Update Carousel</label>
				<br><br>
				<form target="_blank" action ='assets/update_assets.php' method='post' enctype = 'multipart/form-data'>
					<input type='file' name='image'>
					<input type='number' placeholder='Slide Number' name='slide_no'>
					<input type='submit' name='update_carousel'>
				</form>
				<br><br>
				<label>Previous Images</label>
				<br><br>
				<label style='font-size : 13px;display;block;'>Slide 1</label><br>
				<img src='assets/img/banners/banner-1.png' style='max-width : 80%;'><br>
				
				<label style='font-size : 13px;display;block;'>Slide 2</label><br>
				<img src='assets/img/banners/banner-2.png' style='max-width : 80%;'><br>
				
				<label style='font-size : 13px;display;block;'>Slide 3</label><br>
				<img src='assets/img/banners/banner-3.png' style='max-width : 80%;'><br>
				<label style='font-size : 13px;display;block;'>Slide 4</label><br>
				<img src='assets/img/banners/banner-4.png' style='max-width : 80%;'><br>
				
				<label style='font-size : 13px;display;block;'>Slide 5</label><br>
				<img src='assets/img/banners/banner-5.png' style='max-width : 80%;'><br>
				
				<label style='font-size : 13px;display;block;'>Slide 6</label><br>
				<img src='assets/img/banners/banner-6.png' style='max-width : 80%;'><br>
				<label style='font-size : 13px;display;block;'>Slide 7</label><br>
				<img src='assets/img/banners/banner-7.png' style='max-width : 80%;'><br>
				
				<label style='font-size : 13px;display;block;'>Slide 8</label><br>
				<img src='assets/img/banners/banner-8.png' style='max-width : 80%;'><br>
				
				<label style='font-size : 13px;display;block;'>Slide 9</label><br>
				<img src='assets/img/banners/banner-9.png' style='max-width : 80%;'><br>
				<label style='font-size : 13px;display;block;'>Slide 10</label><br>
				<img src='assets/img/banners/banner-10.png' style='max-width : 80%;'><br>
				
				<label style='font-size : 13px;display;block;'>Slide 11</label><br>
				<img src='assets/img/banners/banner-11.png' style='max-width : 80%;'><br>
				
				<label style='font-size : 13px;display;block;'>Slide 12</label><br>
				<img src='assets/img/banners/banner-12.png' style='max-width : 80%;'><br>
			</div>
			<div id='' class='m_unit' i = '3' style='display : none'>
				<br><br>
				<label>Update Title</label>
				<br>
				<form target="_blank" action='app-data/update_app_data.php' method='post'>
					<input type='text' placeholder = "Enter Title" name="title" style='width : 50%'>
					<input type='submit' value='Submit' name='submit_title'>
				</form>
			</div>
			<div id='' class='m_unit' i = '4' style='display : none'>
				<br><br>
				<label>Update Admin Credentials</label>
				<br>
				<form target="_blank" action='app-data/update_app_data.php' method='post'>
					<input type='text' placeholder = "New Username" name='new_uname'>
					<input type='password' placeholder = "New Password" name='new_pass'>
					<br>
					<input type='text' placeholder = "Current Username" name='cur_uname'>
					<input type='password' placeholder = "Current Password" name='cur_pass'>
					<br>
					<input type='submit' name='submit_credentials'>
				</form>
			</div>
			<div id='' class='m_unit' i = '5' style='display : none;'>
				<br><br>
				<label>Create Menu</label>
				<br>
				<form target="_blank" action = "app/create_menu.php" method = "post">
					<input type='text' name='menu_name' placeholder='Menu Title' style='width:50%;'>
					<input type='submit' name='submit_menu_title'>
				</form>
			</div>
			<div id='' class='m_unit' i = '6' style='display : none;'>
				<br>
				<label class='title'>Choose Root</label>
				<br>
				<select class='topbar-select' style='width : 300px;'>
				<option>Choose</option>
					<?php 
						echo get_menu($con);
					?>
				</select>
				<br>
				<div id='treeview-container' style='width : 300px; height : calc(100% - 120px);display : inline-block;margin-top :20px;'></div>
				<div id='' style='display : inline-block; min-width : 300px; width : calc(100% - 650px);height : 100px;vertical-align : top;margin:0px 20px; margin-top : -100px;'>
					<div id = "for-file">
						<label>Add Sub Menu IN</label>
						<label style='font-size:18px;' class = 'current_node'></label>
						<br>
						<input type = "text" placeholder = "Menu Name" id='new-menu-name' style='width:90%;'>
						<br>
						<input type='submit' id = 'submit-new-menu'>
						<br><br>
						<label>Add File IN</label>
						<label style='font-size:18px;' class = 'current_node'></label>
						<br>
						<input type = "text" placeholder = "File Name" id='new-file-name' style='width:90%;'>
						<input type = "text" placeholder = "File URL" id='new-file-url' style='width:90%;'>
						<select id='new-file-type'>
							<option value='pdf'>PDF</option>
							<option value='docx'>DOCX</option>
							<option value='html'>HTML</option>
						</select>
						<br>
						<input type='submit' id = 'submit-new-file'>
						<br><br>
					</div>
						<label>Delete</label>
						<label style='font-size:18px;' class = 'current_node'></label>
						<p style='font-size:13px'>If you delete this menu/submenu, all of its children will be removed. They will be present in database and can be recovered.</p>
						<input type='submit' value='Delete' id='delete-node'>
				</div>
			</div>
			<div id='' class='m_unit' i = '7' style='display : none;'>
				<br><br>
				<label>Delte a Menu</label>
				<br>
				<form target="_blank" action = "app/delete_menu.php" target='_blank' method='post'>
					<select class='topbar-select' style='width : 300px;' name='menu'>
					<option>Choose</option>
						<?php 
							echo get_menu($con);
						?>
					</select>
					<input type='submit' value='Delete'>
				</form>
			</div>
		</div>
			
				
				
		<div id="rsp_">
			<img id="cp_l" class="cp_i" src="files/images/cp_loading.gif">
			<img id="cp_s" class="cp_i" src="files/images/cp_tick.png">
			<img id="cp_e" class="cp_i" src="files/images/cp_err.png">
			<p>Sending Data</p>
		</div>
	
</body></html>