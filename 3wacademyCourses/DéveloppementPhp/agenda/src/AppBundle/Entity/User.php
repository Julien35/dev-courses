<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * User.
 *
 * @ORM\Table(name="user")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\UserRepository")
 */
class User implements UserInterface
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="user_name", type="string", length=255, unique=true)
     */
    private $userName;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=255, unique=true)
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="password", type="string", length=255)
     */
    private $password;

    /**
     * @var string
     *
     * @ORM\Column(name="token", type="string", length=255, unique=true)
     */
    private $token;

    /**
     * @ORM\OneToMany(targetEntity="Meeting", mappedBy = "user")
     */
    private $meetings;

    /**
     * @ORM\Column(name="to_hour", type="integer")
     */
    private $to_hour;

    /**
     * @ORM\Column(name="from_hour", type="integer")
     */
    private $from_hour;

    /**
     * @ORM\Column(name="step", type="integer")
     */
    private $step;

    /**
     * @ORM\Column(name="padding", type="integer")
     */
    private $padding;

    /**
     * @ORM\Column(name="min_delay", type="integer")
     */
    private $min_delay;

    /**
     * @ORM\Column(name="nb_day", type="integer")
     */
    private $nb_day;

    public function __construct()
    {
        $this->setToken();
        $this->to_hour = 18;
        $this->from_hour = 8;
        $this->step = 25;
        $this->padding = 5;
        $this->min_delay = 60;
        $this->nb_day = 3;
    }

    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set userName.
     *
     * @param string $userName
     *
     * @return User
     */
    public function setUserName($userName)
    {
        $this->userName = $userName;

        return $this;
    }

    /**
     * Get userName.
     *
     * @return string
     */
    public function getUserName()
    {
        return $this->userName;
    }

    /**
     * Set email.
     *
     * @param string $email
     *
     * @return User
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email.
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set password.
     *
     * @param string $password
     *
     * @return User
     */
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get password.
     *
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set token.
     *
     * @param string $token
     *
     * @return User
     */
    public function setToken()
    {
        $this->token = uniqid();

        return $this;
    }

    /**
     * Get token.
     *
     * @return string
     */
    public function getToken()
    {
        return $this->token;
    }

    /**
     * Add meeting.
     *
     * @param \AppBundle\Entity\Meeting $meeting
     *
     * @return User
     */
    public function addMeeting(\AppBundle\Entity\Meeting $meeting)
    {
        $this->meetings[] = $meeting;

        return $this;
    }

    /**
     * Remove meeting.
     *
     * @param \AppBundle\Entity\Meeting $meeting
     */
    public function removeMeeting(\AppBundle\Entity\Meeting $meeting)
    {
        $this->meetings->removeElement($meeting);
    }

    /**
     * Get meetings.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getMeetings()
    {
        return $this->meetings;
    }

    /**
     * Get busyMeetings.
     *
     * @return \Meetings
     */
    public function getBusyMeetings()
    {
        $meetings = [];
        foreach ($this->meetings as $m) {
            $meetings[$m->getMeetingDate()->format('Y-m-d H:i:s')] = $m;
        }

        return $meetings;
    }

    /**
     * Get Roles.
     *
     * @return array
     */
    public function getRoles()
    {
        return array('ROLE_USER');
    }

    /**
     * Get Salt.
     *
     * @return null
     */
    public function getSalt()
    {
        return null;
    }

    /**
     * Get eraseCredentials.
     *
     * @return null
     */
    public function eraseCredentials()
    {
      return null;
    }

    /**
     * Set toHour
     *
     * @param integer $toHour
     *
     * @return User
     */
    public function setToHour($toHour)
    {
        $this->to_hour = $toHour;

        return $this;
    }

    /**
     * Get toHour
     *
     * @return integer
     */
    public function getToHour()
    {
        return $this->to_hour;
    }

    /**
     * Set fromHour
     *
     * @param integer $fromHour
     *
     * @return User
     */
    public function setFromHour($fromHour)
    {
        $this->from_hour = $fromHour;

        return $this;
    }

    /**
     * Get fromHour
     *
     * @return integer
     */
    public function getFromHour()
    {
        return $this->from_hour;
    }

    /**
     * Set step
     *
     * @param integer $step
     *
     * @return User
     */
    public function setStep($step)
    {
        $this->step = $step;

        return $this;
    }

    /**
     * Get step
     *
     * @return integer
     */
    public function getStep()
    {
        return $this->step;
    }

    /**
     * Set padding
     *
     * @param integer $padding
     *
     * @return User
     */
    public function setPadding($padding)
    {
        $this->padding = $padding;

        return $this;
    }

    /**
     * Get padding
     *
     * @return integer
     */
    public function getPadding()
    {
        return $this->padding;
    }

    /**
     * Set minDelay
     *
     * @param integer $minDelay
     *
     * @return User
     */
    public function setMinDelay($minDelay)
    {
        $this->min_delay = $minDelay;

        return $this;
    }

    /**
     * Get minDelay
     *
     * @return integer
     */
    public function getMinDelay()
    {
        return $this->min_delay;
    }

    /**
     * Set nbDay
     *
     * @param integer $nbDay
     *
     * @return User
     */
    public function setNbDay($nbDay)
    {
        $this->nb_day = $nbDay;

        return $this;
    }

    /**
     * Get nbDay
     *
     * @return integer
     */
    public function getNbDay()
    {
        return $this->nb_day;
    }
}
