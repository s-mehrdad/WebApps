<!-- =========================================================================
/// <summary>
/// web.php
/// PHP
/// created by Mehrdad Soleimanimajd on 04.03.2024
/// </summary>
/// <created>ʆϒʅ, 04.03.2024</created>
/// <changed>ʆϒʅ, 08.03.2024</changed>
========================================================================== -->

<!DOCTYPE html>
<html xmlns="http: //www.w3.org/1999/xhtml">

<head>
  <title>PHP WebApplication</title>
  <base href="" target="_self" />
  <link rel="stylesheet" type="text/css" href="site.css" />
  <!-- <script src="main.js"></script> -->
  <style type="text/css">
    body {
      background-color: #2faafdef
    }
  </style>
  <meta title="PHP WebApplication" />
  <meta name="description" content="a delicious php web application" />
  <meta name="keywords" content="HTML,CSS,XHTML,JavaScript,XML,PHP" />
  <meta name="author" content="Mehrdad Soleimanimajd" />
  <meta lang="en" translate="yes" charset="utf-8" />
  <!-- <meta http-equiv="180" /> -->
</head>

<body style="background-color:#c4e2ff">
  <header>
    <?php echo '<p>hello php world</p>'; ?>
  </header>
  <nav>
  </nav>
  <aside>

  </aside>
  <section>
  </section>
  <article>
    <?php echo $_SERVER['HTTP_USER_AGENT']; ?>
    <?php phpinfo(); ?>
  </article>
  <detail>
  </detail>
  <footer>

  </footer>
</body>