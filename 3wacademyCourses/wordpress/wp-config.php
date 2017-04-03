<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clefs secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C'est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d'installation. Vous n'avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'wp');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'troiswa');

/** Adresse de l'hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N'y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clefs uniques d'authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n'importe quel moment, afin d'invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ')&9y_Mf$]K2}at`~P.^Rh|)ho~Mi:#?@]!Aj95JDIt.q(+jAOCkAjPa;Nt!d+*WY');
define('SECURE_AUTH_KEY',  'EsWmJ95FLr-/iCx@LoN4rC^;FFMnx;7c!M.C/o0Q?fzjD<YY`gS;5vkAFDlJfsHr');
define('LOGGED_IN_KEY',    'j|Vz$%a5w[C#b4~jKKKiA?72x3=x|/?h-1av9Os=~W9IU}Fgj~zf*}w9/[}I8F6}');
define('NONCE_KEY',        '>S:(g_$>Wiu{1RB9YP}i7AlXX&nnpz`RPCfOM?4sI/H<GLQ]v8b<5.*X;-I61*Bz');
define('AUTH_SALT',        ')ywY F#9z21xl<j1R2r|[lGVx^Hs&[@w /cU}]*x_~m?)!U+<8HFQtGrUOdd.-w#');
define('SECURE_AUTH_SALT', 'y0=@KW/&;KKC,7ziMl2R_]!rW,x7CgeteCVa1lDW3Bd@ixyQh0zsRXbcbDhuQOU@');
define('LOGGED_IN_SALT',   'nP;OMKwBXX!NLneKf ]n0s8xB| ^qs*GV(2r2kMG4f1mNWN DlnW~Z_ko!a^+049');
define('NONCE_SALT',       'w 4iB,L3*9s+QPn[(o8al:}865/`xEKN-Urv/le*g9Pp|&c$7~{G>?*8o_#zLmYE');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N'utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés!
 */
$table_prefix  = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l'affichage des
 * notifications d'erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d'extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d'information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 * 
 * @link https://codex.wordpress.org/Debugging_in_WordPress 
 */
define('WP_DEBUG', false);

/* C'est tout, ne touchez pas à ce qui suit ! Bon blogging ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');